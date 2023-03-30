import { Router } from "express";
import usersRouter from "./usersRouter.js";

const routes = Router()

routes.use("/users", usersRouter)

export default routes


