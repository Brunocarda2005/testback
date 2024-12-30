import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "https://test-three-chi-98.vercel.app", // Especifica el origen que puede hacer peticiones a tu API
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos HTTP permitidos
    allowedHeaders: ["Content-Type", "Authorization"], // Encabezados permitidos
  })
);

app.use(express.json());
app.use(morgan("dev"));
app.use("/api", authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
