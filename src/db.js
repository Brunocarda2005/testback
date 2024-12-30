import mongoose from "mongoose";

require("dotenv").config(); // Cargar las variables de entorno
const mongoUrl = process.env.MONGO_URL;

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
