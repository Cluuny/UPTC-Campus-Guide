import { Router } from "express";
import { getMain } from "../controllers/main.controller.js";

const mainRouter = Router();

mainRouter.get('/', getMain);

export default mainRouter;