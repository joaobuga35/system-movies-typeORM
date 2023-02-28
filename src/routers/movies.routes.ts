import { Router } from "express";
import { createMovieController, editMovieController } from "../controllers/movies.controllers";
import ensureValidatedID from "../middlewares/ensureIdExists.middleware";
import ensureValidatedName from "../middlewares/ensureNameExists.middleware";
import { validatedBody } from "../middlewares/validatedBody.middleware";
import { editMovieSchema, movieCreateSchema } from "../schemas/createMovie.schema";

const moviesRoutes: Router = Router();

moviesRoutes.post("",validatedBody(movieCreateSchema),ensureValidatedName,createMovieController);
moviesRoutes.patch("/:id",ensureValidatedID,validatedBody(editMovieSchema),ensureValidatedName,editMovieController);
moviesRoutes.delete("/:id");

export default moviesRoutes;