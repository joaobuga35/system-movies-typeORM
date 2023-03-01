import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";

const deleteMovieService = async (idMovie: number): Promise<void> => {
	const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);

	const movie = await movieRepo.findOne({
		where: {
			id: idMovie
		}
	});

	await movieRepo.remove(movie!);
};

export {
	deleteMovieService
};