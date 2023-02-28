import { Router } from "express";
import { createMovieController } from "../controllers/movies.controllers";
import ensureValidatedName from "../middlewares/ensureNameExists.middleware";
import { validatedBody } from "../middlewares/validatedBody.middleware";
import { movieCreateSchema } from "../schemas/createMovie.schema";

const moviesRoutes: Router = Router();

moviesRoutes.post("",validatedBody(movieCreateSchema),ensureValidatedName,createMovieController);

export default moviesRoutes;