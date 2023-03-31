import { Router } from "express";
import usersController from "../controllers/usersController.js";
import validationSchema from "../middlewares/schemaValidationMiddleware.js";
import {userSchema} from "../schemas/userSchema.js"

const usersRouter = Router()


//usersRouter.post('/', usersController.signup)
usersRouter.post('/signup', validationSchema(userSchema) ,usersController.signup)
usersRouter.post('/signin', usersController.signin)
export default usersRouter