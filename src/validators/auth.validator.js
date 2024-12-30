import { body, param } from "express-validator";

export const addValidator = () => {
  return [
    body("Titulo").notEmpty().withMessage("Task needs a title"),
    body("Descripcion").optional(),
    body("Estado").optional(),
  ];
};

export const updateValidator = () => {
  return [
    param("id").notEmpty().withMessage("Task needs an id"),
    body("Titulo").notEmpty().withMessage("Task needs a title"),
    body("Descripcion").optional(),
    body("Estado").optional(),
  ];
};
