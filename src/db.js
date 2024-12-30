import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config(); // Cargar las variables de entorno
const mongoUrl = "mongodb://127.0.0.1:27017/merndb";

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
