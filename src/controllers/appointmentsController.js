import httpStatus from "http-status";
import appointmentsService from "../services/appointmentsService.js";


async function createAppoitment(req, res, next) {
    try {
        const { scheduleId, patientId, status } = req.body
        
        await appointmentsService.createAppoitment({ scheduleId, patientId, status })

        return res.sendStatus(httpStatus.OK)
    } catch (error) {    

        next(error)
    }
}

async function listPatientAppointments(req, res, next) {
    try {
        const { patientId } = req.params
        const patientAppointments = await appointmentsService.listPatientAppointments(patientId)

        return res.status(httpStatus.OK).send(patientAppointments)

    } catch (error) {
        next(error)
    }
}


async function listDoctorAppointments(req, res, next) {
    try {
        const { doctorId } = req.params
        const doctorAppointments = await appointmentsService.listDoctorAppointments(doctorId)
        return res.send(doctorAppointments)

    } catch (error) {
        next(error)
    }
}


async function updateAppointmentStatus(req, res,next) {
    console.log('aqui idUser', idUser)
    try {
        const { id } = req.params
        const idUser = req.user.id
        const { status } = req.body

        console.log('aqui idUser', idUser)
        await appointmentsService.updateAppointmentStatus({ id, status, idUser })

        return res.sendStatus(httpStatus.OK)
    } catch (error) {     

        next(error)
    }
}

export default {
    createAppoitment,
    updateAppointmentStatus,
     listPatientAppointments,
     listDoctorAppointments
}