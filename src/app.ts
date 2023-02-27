import express,{Application} from "express";
import { handleError } from "./errors";

const app: Application = express();
app.use(express.json());

app.use(handleError);

export default app;
