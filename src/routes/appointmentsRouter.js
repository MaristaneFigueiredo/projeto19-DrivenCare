import { Router } from "express";
import appointmentsController from "../controllers/appointmentsController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import {appointmentSchema, appointmentUpdateStatusSchema} from "../schemas/appoitmentSchema.js"
import validationSchema from "../middlewares/schemaValidationMiddleware.js";

const appointmentsRouter = Router()


appointmentsRouter
.all("/*", authMiddleware.authValidation)
.post("/", await validationSchema(appointmentSchema), appointmentsController.createAppoitment)
//.post("/", appointmentsController.createAppoitment)
//.patch("/update-status/:id", await validateBody(appointmentUpdateStatusSchema), appointmentsController.updateAppoitmentStatus)
//.get("/list-patient-appoitments/:patientId", appointmentsController.listPatientAppoitments)
//.get("/list-doctors-appoitments/:doctorId", appointmentsController.listDoctorAppoitments)


export default appointmentsRouter