import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import {  iMovieCreate, iMovieResponse } from "../interfaces/movies.interface";
import { movieSchema } from "../schemas";

const createMovieService = async (moviesData: iMovieCreate): Promise<iMovieResponse> => {
	const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);

	const movies: Movie = movieRepo.create(moviesData);
	await movieRepo.save(movies);

	const newMovie = movieSchema.parse(movies);

	return newMovie;
};

export {
	createMovieService
};