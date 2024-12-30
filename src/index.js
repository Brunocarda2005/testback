import app from "./app.js";
import morgan from "morgan";
import { connectDB } from "./db.js";

connectDB();
app.listen(3000);
app.use(morgan("dev"));

console.log("Server is running on port 3000");
