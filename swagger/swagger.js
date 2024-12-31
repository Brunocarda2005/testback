import swaggerJsdoc from "swagger-jsdoc";
import dotenv from "dotenv";
import path from "path";

// Cargar el archivo de entorno correcto según el valor de NODE_ENV
const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TEST API",
      version: "1.0.0",
      description: "API for testing Coally",
      contact: {
        name: "Bruno Cardamone",
      },
    },
    servers: [
      {
        url: process.env.SWAGGER_SERVER_URL,
        description:
          process.env.NODE_ENV === "production"
            ? "Production server"
            : "Local server",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const specs = swaggerJsdoc(options);
export default specs;
