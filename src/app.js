import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import cors from "cors";

const app = express();

// Configura CORS para permitir solicitudes desde tu frontend en Vercel
app.use(cors());

app.use(express.json());
app.use(morgan("dev"));
app.use("/api", authRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
