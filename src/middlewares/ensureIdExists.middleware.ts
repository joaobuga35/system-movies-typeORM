import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors";


const ensureValidatedID = async (req: Request, resp: Response, next: NextFunction): Promise<void> => {

	const idMovie = Number(req.params.id);
	const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);

	const verifyID = await movieRepo.findOne({
		where: {
			id: idMovie
		}
	});

	if (!verifyID) {
		throw new AppError("Movie not found",404);
	}

	return next();
};

export default ensureValidatedID;