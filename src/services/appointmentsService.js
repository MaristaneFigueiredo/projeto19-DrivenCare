import appointmentsRepository from "../repositories/appointmentsRepository.js"
import patientsErros from "../errors/patientsErros.js"
import appoitmentsErrors from "../errors/appoitmentsErrors.js"
import patientsRepository from "../repositories/patientsRepository.js"
import schedulesRepository from "../repositories/schedulesRepository.js"
import usersRepository from "../repositories/usersRepository.js"


import errors from "../errors/index.js"


async function createAppoitment({ scheduleId, patientId, status }) {    

    await checkCreateAppoitmentBusinessRules({ scheduleId, patientId, status })

    
    return appointmentsRepository.createAppoitment({ scheduleId, patientId, status })
}


async function checkCreateAppoitmentBusinessRules({ scheduleId, patientId, status }) {    
    
    const patient = await findPatientById(patientId)   
    

    const isPatient = patient.length !== 0

    if(!isPatient) {
        throw patientsErros.UserMustBeAPatient()
    }

    const schedule = await findScheludeById(scheduleId)
    const scheduleExists = schedule.rows.length !== 0

    
    if(!scheduleExists) {
        throw errors.notFoundError()
    }

    const isScheduleAvaiable = schedule.rows[0].avaiable 

    if(!isScheduleAvaiable) {
        throw appoitmentsErrors.AppoitmentScheduleUnavaiable()
    }

    const statusIsValid = isValidStatus(status)

    if(!statusIsValid) {
        throw appoitmentsErrors.AppoitmentStatusInvalid()
    }
    
    return

}

async function findPatientById(id) {
    return await patientsRepository.findPatientById(id)

}

async function findScheludeById(id) {
    return await schedulesRepository.findScheludeById(id)
}

function isValidStatus(status) {
    return status === 'AGENDADO' || 'CANCELADO' || 'CONFIRMADO'
}

async function listPatientAppointments(patientId) {
    return await appointmentsRepository.listPatientAppointments(patientId)
}


async function listDoctorAppointments(doctorId) {
    return await appointmentsRepository.listDoctorAppointments(doctorId)
}


async function updateAppointmentStatus({ id, status, idUser }) {
    await checkUpdateAppointmentStatusBusinessRules({ id, status, idUser })
    return await appointmentsRepository.updateAppointmentStatus(id, status)
}

async function checkUpdateAppointmentStatusBusinessRules({ id, status, idUser}) {

    const user = await findUserById(idUser)
    const appointment = await appointmentsRepository.findAppoitmentById(id)
    const scheduleId = appointment.rows[0].scheduleId

    if(appointment.rows.length === 0) {        
        throw errors.notFoundError()
    }

    if(user[0].typeUser !== "D" && status === "CONFIRMADO") {
        throw appoitmentsErrors.JustDoctorsConfirmAppoitment()
    }

    if(user[0].typeUser === "D" && status === "CANCELADO" && appointment.rows[0].status === "CONFIRMADO") {
        throw appoitmentsErrors.ForbbidenCancelConfirmedAppoitment()        
    }

    const doctor = findDoctorByIdUser(idUser)
    const doctorId = doctor[0].id

    const schedule = findScheludeById(scheduleId)
    const doctorIdSchedule = schedule.rows[0].doctorId

    if(doctorId !== doctorIdSchedule) {
        throw appoitmentsErrors.AppoitmentNotBelongsThisDoctor()
    }

    return

}

async function findUserById(id) {
    return await usersRepository.findById(id).rows
}

async function findDoctorByIdUser(idUser) {
    return doctorsRepository.findDoctorByIdUser(idUser)
}



export default {
    createAppoitment,
     updateAppointmentStatus,
     listPatientAppointments,
     listDoctorAppointments
}