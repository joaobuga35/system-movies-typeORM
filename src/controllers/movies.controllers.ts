import { Request, Response } from "express";
import {  iMovieCreate } from "../interfaces/movies.interface";
import { createMovieService } from "../services/createMovie.service";

const createMovieController = async (req: Request, resp: Response): Promise<Response> => {
	const body: iMovieCreate = req.body;

	const createResult = await createMovieService(body);

	return resp.status(201).json(createResult);
};

export {
	createMovieController
};