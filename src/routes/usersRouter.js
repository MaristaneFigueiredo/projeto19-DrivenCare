import { Router } from "express";
import usersController from "../controllers/usersController.js";
import validationSchema from "../middlewares/schemaValidationMiddleware.js";
import {userSchema} from "../schemas/userSchema.js"

const usersRouter = Router()


//usersRouter.post('/', usersController.signup)
usersRouter.post('/', validationSchema(userSchema) ,usersController.signup)
export default usersRouter