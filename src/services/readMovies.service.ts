/* eslint-disable prefer-const */
import { Request } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { iobjectReadAllMovies } from "../interfaces";

const readMoviesService = async (req: Request): Promise<iobjectReadAllMovies> => {
	let page: number = Number(req.query.page) || 1;
	let perPage: number = Number(req.query.perPage) || 5;

	if (perPage < 1 || perPage > 5 || perPage < 0) {perPage = 5;}
	if (page < 1 || page < 0) {page = 1;}

	let baseUrl = "http://localhost:3000/movies";
	let prevPage: string | null = page === 1 ? null : `${baseUrl}?page=${page - 1}&perPage=${perPage}`;
	let nextPage: string | null = `${baseUrl}?page=${page + 1}&perPage=${perPage}`;
	let sort = req.query.sort;
	let order: string = req.query.order === "DESC" || req.query.order === "desc" ? req.query.order.toUpperCase() : "ASC"; 

	if (sort !== "price" && sort !== "duration") {sort = "id"; order = "ASC";}

	const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);

	const findMovieLength: Array<Movie> = await movieRepo.find();

	const findMoviePagination: Array<Movie> = await movieRepo.find({ 
		take: perPage,
		skip: perPage * (page - 1),
		order: {
			[sort]: order
		}
	});

	let checkMovieExists: Array<Movie> = await movieRepo.find({
		take: perPage,
		skip: perPage * page,
		order: {
			id: "ASC"
		}
	});
	
	if (checkMovieExists.length === 0) {
		nextPage = null;
	}

	const modelObject = {
		count: findMovieLength.length,
		data: [...findMoviePagination],
		prevPage: prevPage,
		nextPage: nextPage
	};

	return modelObject;
};

export default readMoviesService;