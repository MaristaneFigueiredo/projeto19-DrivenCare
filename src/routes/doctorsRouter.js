import { Router } from "express";
import doctorsController from "../controllers/doctorsController.js";
import authMiddleware from "../middlewares/authMiddleware.js";



const doctorsRouter = Router()


doctorsRouter.all("/*", authMiddleware.authValidation)
doctorsRouter.get('/', doctorsController.getDoctors)


export default doctorsRouter