import { Request, Response } from "express";
import {  iMovieCreate } from "../interfaces/movies.interface";
import { createMovieService } from "../services/createMovie.service";
import { deleteMovieService } from "../services/deleteMovie.service";
import editMovieService from "../services/editMovie.service";
import readMoviesService from "../services/readMovies.service";

const createMovieController = async (req: Request, resp: Response): Promise<Response> => {
	const body: iMovieCreate = req.body;

	const createResult = await createMovieService(body);

	return resp.status(201).json(createResult);
};

const readMoviesController = async (req: Request, resp: Response): Promise<Response> => {

	const allMovies = await readMoviesService(req);

	return resp.status(200).json(allMovies);
};

const editMovieController = async (req: Request, resp: Response): Promise<Response> => {
	const id = Number(req.params.id);

	const updatedMovie = await editMovieService(req.body, id);

	return resp.status(200).json(updatedMovie);
};

const deleteMovieController = async (req: Request, resp: Response): Promise<Response> => {
	const id = Number(req.params.id);

	await deleteMovieService(id);
	
	return resp.status(204).json();
};

export {
	createMovieController,
	editMovieController,
	deleteMovieController,
	readMoviesController
};