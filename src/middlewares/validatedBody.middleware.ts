import { NextFunction, Response, Request } from "express";
import { ZodTypeAny } from "zod";

const validatedBody = (schema: ZodTypeAny) => (req: Request, resp: Response, next: NextFunction) => {

	const validatedData = schema.parse(req.body);

	req.body = validatedData;

	return next();
};

export {
	validatedBody
};