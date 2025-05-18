import express from "express";
import "dotenv/config";
import cors from "cors";

const appp = express();
appp.use(cors()); //Enable Cross-Origin Resource Sharing

appp.get("/", (req, res) => {
  res.send("hello world, welcome to hotel booking website...");
});

const PORT = process.env.PORT || 3001;
appp.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
