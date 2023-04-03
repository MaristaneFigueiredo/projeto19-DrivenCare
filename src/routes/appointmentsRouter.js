import { Router } from "express";
import appointmentsController from "../controllers/appointmentsController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import {appointmentSchema, appointmentUpdateStatusSchema} from "../schemas/appoitmentSchema.js"
import validationSchema from "../middlewares/schemaValidationMiddleware.js";

const appointmentsRouter = Router()


appointmentsRouter
.all("/*", authMiddleware.authValidation)
.post("/", await validationSchema(appointmentSchema), appointmentsController.createAppoitment)
.patch("/update-status/:id", appointmentsController.updateAppointmentStatus)
.get("/list-patient-appointments/:patientId", appointmentsController.listPatientAppointments)
.get("/list-doctors-appointments/:doctorId",  appointmentsController.listDoctorAppointments)


export default appointmentsRouter


// .patch("/update-status/:id", await validationSchema(appointmentUpdateStatusSchema), appointmentsController.updateAppointmentStatus)