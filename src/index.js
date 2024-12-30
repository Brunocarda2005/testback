import app from "./app.js";
import morgan from "morgan";
import { connectDB } from "./db.js";

connectDB();
app.listen(4000);
app.use(morgan("dev"));

console.log("Server is running on port 4000");
