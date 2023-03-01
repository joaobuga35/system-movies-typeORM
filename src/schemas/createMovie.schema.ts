import {z} from "zod";

const movieSchema = z.object({
	id: z.number(),
	name: z.string().min(3).max(50),
	description: z.string().nullable().optional(),
	price: z.number().int(),
	duration: z.number().int().min(1, { message: "Number must be greater than 0" })
});


const movieCreateSchema = movieSchema.omit({
	id: true
}); 

const editMovieSchema = movieCreateSchema.partial();

const readMoviesSchema = movieSchema.array();

const objectReadMovies = z.object({
	count: z.number(),
	data: readMoviesSchema
});

export {movieSchema,movieCreateSchema,editMovieSchema,readMoviesSchema, objectReadMovies};