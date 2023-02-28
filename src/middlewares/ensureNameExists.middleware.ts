import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors";

const ensureValidatedName = async (req: Request, resp: Response, next: NextFunction): Promise<void> => {

	const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);

	const compareName = await movieRepo.findOne({
		where: {
			name: req.body.name
		}
	});

	if (compareName) {
		throw new AppError("Movie already exists.",409);
	}

	return next();
};

export default ensureValidatedName;