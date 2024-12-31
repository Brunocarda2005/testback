import { Router } from "express";
import {
  add,
  update,
  getAll,
  getTask,
  deleteTask,
} from "../controllers/auth.controller.js";
import { validatorSchema } from "../middlewares/validator.middlewares.js";
import { addValidator, updateValidator } from "../validators/auth.validator.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Task
 *   description: The Task managing API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - Titulo
 *       properties:
 *         Titulo:
 *           type: string
 *           description: The title of the task
 *         Descripcion:
 *           type: string
 *           description: A brief description of the task
 *         Estado:
 *           type: string
 *           description: The current state of the task
 *       example:
 *         _id: "67742bc92aac0cd40e9aded9"
 *         Titulo: "Comprar ingredientes para la cena"
 *         Descripcion: "Ir al supermercado y comprar los ingredientes para la cena"
 *         Estado: "pending"
 *         createdAt: "2024-12-31T17:37:13.954Z"
 *         updatedAt: "2024-12-31T18:00:14.864Z"
 *         __v: 0
 */

/**
 * @swagger
 * /task:
 *   get:
 *     summary: Returns the list of all Tasks or filter by Estado
 *     tags: [Task]
 *     parameters:
 *       - in: query
 *         name: Estado
 *         schema:
 *           type: string
 *         description: Filter tasks by their state
 *     responses:
 *       200:
 *         description: The list of Tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   Titulo:
 *                     type: string
 *                     description: The title of the task
 *                   Descripcion:
 *                     type: string
 *                     description: A brief description of the task
 *                   Estado:
 *                     type: string
 *                     description: The current state of the task
 *                 example:
 *                   _id: "67742bc92aac0cd40e9aded9"
 *                   Titulo: "Comprar ingredientes para la cena"
 *                   Descripcion: "Ir al supermercado y comprar los ingredientes para preparar la cena"
 *                   Estado: "pending"
 *                   createdAt: "2024-12-31T17:37:13.954Z"
 *                   updatedAt: "2024-12-31T18:00:14.864Z"
 *                   __v: 0
 */
router.get("/task", getAll); // Ruta para obtener todas las tareas o filtrar por estado

/**
 * @swagger
 * /task/{id}:
 *   get:
 *     summary: Get a Task by id
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The id of the Task
 *     responses:
 *       200:
 *         description: Task data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: Task not found
 */
router.get("/task/:id", getTask); // Ruta para obtener una tarea por su ID

/**
 * @swagger
 * /task:
 *   post:
 *     summary: Create a new Task
 *     tags: [Task]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            properties:
 *               Titulo:
 *                 type: string
 *                 description: The title of the task
 *               Descripcion:
 *                 type: string
 *                 description: A brief description of the task
 *               Estado:
 *                 type: string
 *                 description: The current state of the task
 *     responses:
 *       201:
 *         description: Task created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 */

router.post("/task", validatorSchema(addValidator()), add); // Ruta para crear una nueva tarea

/**
 * @swagger
 * /task/{id}:
 *   put:
 *     summary: Update an existing Task
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The id of the Task to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Titulo:
 *                 type: string
 *                 description: Updated title of the Task
 *               Descripcion:
 *                 type: string
 *                 description: Updated description of the Task
 *               Estado:
 *                 type: string
 *                 description: Updated state of the Task
 *             example:
 *               Titulo: Limpiar la casa
 *               Descripcion: Limpiar todas las habitaciones
 *               Estado: completed
 *     responses:
 *       200:
 *         description: Task updated successfully
 *         content:
 *           application/json:
 *             schema:
 *             type: object
 *             properties:
 *               Titulo:
 *                 type: string
 *                 description: Updated title of the Task
 *               Descripcion:
 *                 type: string
 *                 description: Updated description of the Task
 *               Estado:
 *                 type: string
 *                 description: Updated state of the Task
 *             example:
 *               "message": "Task update"
 *       404:
 *         description: Task not found
 */
router.put("/task/:id", validatorSchema(updateValidator()), update); // Ruta para actualizar una tarea existente

/**
 * @swagger
 * /task/{id}:
 *   delete:
 *     summary: Delete a Task by id
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The id of the Task to delete
 *     responses:
 *       204:
 *         description: Task deleted successfully
 *       404:
 *         description: Task not found
 */
router.delete("/task/:id", deleteTask); // Ruta para eliminar una tarea por su ID

export default router;
