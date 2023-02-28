import { DeepPartial, Repository } from "typeorm";
import {z} from "zod";
import { Movie } from "../entities";
import {  movieCreateSchema, movieSchema } from "../schemas";

type iMovieCreate = z.infer<typeof movieCreateSchema>
type iMovieResponse = z.infer<typeof movieSchema>
type iMovieUpdate = DeepPartial<iMovieCreate>;
type iMovieRepo = Repository<Movie>;

export {
	iMovieCreate,
	iMovieResponse,
	iMovieUpdate,
	iMovieRepo,
};