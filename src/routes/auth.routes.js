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

router.get("/task", getAll);
router.get("/task/:id", getTask);

router.post("/task", validatorSchema(addValidator()), add);
router.put("/task/:id",validatorSchema(updateValidator()), update);

router.delete("/task/:id", deleteTask);

export default router;
