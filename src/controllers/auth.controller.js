import { validationResult } from "express-validator";
import Task from "../models/task.model.js";

export const getAll = async (req, res) => {
  const { Estado } = req.query; 
  
  try {
    const query = Estado ? { Estado: Estado } : {};
    const tasks = await Task.find(query);

    if (!tasks.length) {
      return res.status(200).json({ message: "No tasks found" });
    }

    return res.status(200).json(tasks);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: "No tasks found" });
    }
    return res.status(200).json(task);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export const add = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { Titulo, Descripcion, Estado } = req.body;

  try {
    const newTask = new Task({
      Titulo,
      Descripcion,
      Estado,
    });

    await newTask.save();
    return res.status(201).json(newTask);
  } catch (err) {
    return res.status(err);
  }
};

export const update = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json({ message: "Task update" });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(204).json({ message: "Task deleted" });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
