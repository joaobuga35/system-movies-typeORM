import { DeepPartial, Repository } from "typeorm";
import {z} from "zod";
import { Movie } from "../entities";
import {  movieCreateSchema, movieSchema, objectReadMovies, readMoviesSchema } from "../schemas";

type iMovieCreate = z.infer<typeof movieCreateSchema>
type iMovieResponse = z.infer<typeof movieSchema>
type iMovieUpdate = DeepPartial<iMovieCreate>;
type iMovieRepo = Repository<Movie>;
type iReadAllMovies = z.infer<typeof readMoviesSchema>
type iobjectReadAllMovies = z.infer<typeof objectReadMovies>

export {
	iMovieCreate,
	iMovieResponse,
	iMovieUpdate,
	iMovieRepo,
	iReadAllMovies,
	iobjectReadAllMovies
};