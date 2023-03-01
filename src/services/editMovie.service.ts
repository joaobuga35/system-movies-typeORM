import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import {  iMovieResponse, iMovieUpdate } from "../interfaces";
import { movieSchema } from "../schemas";

const editMovieService = async (movieData: iMovieUpdate, idMovie: number): Promise<iMovieResponse> => {

	const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);

	const oldMovie: Movie | null  = await movieRepo.findOneBy({
		id: idMovie
	});


	const newDataMovie = movieRepo.create({
		...oldMovie,
		...movieData
	});

	await movieRepo.save(newDataMovie);

	const movieResponse = movieSchema.parse(newDataMovie); 

	return movieResponse;
};

export default editMovieService;