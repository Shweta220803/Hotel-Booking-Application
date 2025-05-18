import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhook.js";

//  Connect to Database
connectDB();

const app = express();
app.use(cors()); //Enable Cross-Origin Resource Sharing

//  Middleware
app.use(express.json());
app.use(clerkMiddleware());

//  API to listen clerk webhooks
app.use("/api/clerk", clerkWebhooks);

app.get("/", (req, res) => {
  res.send("hello world, welcome to hotel booking website...");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
