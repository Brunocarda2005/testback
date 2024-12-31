import mongoose from "mongoose";
import dotenv from "dotenv";
import path from 'path';

// Cargar el archivo de entorno correcto según el valor de NODE_ENV
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

const mongoUrl = process.env.MONGO_URI;

if (!mongoUrl) {
  console.error("MONGO_URI is not defined in the .env file");
  process.exit(1);
}

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
