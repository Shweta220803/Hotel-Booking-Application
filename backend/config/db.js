import mongoose from "mongoose";

//  Connect to the MongoDB database
const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database connected")
    );
    await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking-system`);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
