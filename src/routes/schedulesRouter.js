import { Router } from "express";
import schedulesController from "../controllers/schedulesController.js";
import authMiddleware from "../middlewares/authMiddleware.js";



const schedulesRoutes = Router()


schedulesRoutes.all("/*", authMiddleware.authValidation)
schedulesRoutes.get('/', schedulesController.getDoctorSchedules)



export default schedulesRoutes