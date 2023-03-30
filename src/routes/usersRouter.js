import { Router } from "express";
import usersController from "../controllers/usersController.js";

const usersRouter = Router()

usersRouter.post('/', usersController.signup)

export default usersRouter