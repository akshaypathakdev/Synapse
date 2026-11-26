import mongoose from "mongoose";
import { DB_NAME } from "../constants/constants.js";
import { ENV } from "./env.config.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${ENV.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `MONGODB Connected!! DB Host: ${connectionInstance.connection.host}`
    );

    return connectionInstance;
  } catch (error) {
    console.error("MONGODB connection error:", error);
    throw error;
  }
};

export default connectDB;
