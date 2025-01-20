import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

import campaignRouter from "../routers/campaignRoute";
import userRouter from "../routers/userRoute";
import eventRouter from "../routers/eventRoute";

const app = express();
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL as string).then(() => {
  console.log("DB connected successfully");
});

app.use("/api/v1/campaigns", campaignRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/events", eventRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
