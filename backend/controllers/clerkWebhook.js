import mongoose from "mongoose";
import { Webhook } from "svix";

// API Controller Function to manage Clerk User with Database
export const clerkWebhooks = async (req, res) => {
  try {
    console.log("Received Webhook Data:", req.body);

    // Create a Svix instance with clerk webhook secret.
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    //  Getting headers
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    // Verifying Headers
    await whook.verify(JSON.stringify(req.body), headers);

    // Getting data from request body
    const { data, type } = req.body;

    // Log type to ensure the webhook type is what we expect
    // console.log("Webhook Type:", type);

    const userData = {
      _id: data.id,
      email: data.email_addresses[0].email_address,
      username: data.first_name + " " + data.last_name,
      imageUrl: data.image_url,
    };

    //  Switch cases for different events
    switch (type) {
      // create user
      case "user.created": {
        await User.create(userData);
        break;
      }

      // update user
      case "user.updated": {
        await User.findByIdAndUpdate(data.id, userData);
        res.json({});
        break;
      }

      // Delete User
      case "user.deleted": {
        // Log deletion data
        console.log("Deleting User ID:", data.id);

        await User.findByIdAndDelete(data.id);
        res.json({});
        break;
      }

      default:
        console.log("Unhandled event type:", type);
        res
          .status(400)
          .json({ success: false, message: "Unhandled event type" });

        break;
    }
  } catch (error) {
    console.error("Error processing webhook:", error);
    res.json({ success: false, message: error.message });
  }
};

export default clerkWebhooks;
