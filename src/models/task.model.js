import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    Titulo: { type: String, required: true, trim: true },
    Descripcion: { type: String, default: "" },
    Estado: { type: String, default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.model("Task", TaskSchema);
