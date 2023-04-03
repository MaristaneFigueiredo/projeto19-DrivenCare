import appointmentsRepository from "../repositories/appointmentsRepository.js"
import patientsErros from "../errors/patientsErros.js"
import appoitmentsErrors from "../errors/appoitmentsErrors.js"


import errors from "../errors/index.js"


async function createAppoitment({ scheduleId, patientId, status }) {
    await checkCreateAppoitmentBusinessRules({ scheduleId, patientId, status })

    return appointmentsRepository.createAppoitment({ scheduleId, patientId, status })
}


async function checkCreateAppoitmentBusinessRules({ scheduleId, patientId, status }) {
    const patient = await patientsService.findPatientById(patientId)
    
    const isPatient = patient.length !== 0

    if(!isPatient) {
        throw patientsErros.UserMustBeAPatient
    }

    const schedule = await schedulesService.findScheludeById(scheduleId)
    const scheduleExists = schedule.rows.length !== 0

    if(!scheduleExists) {
        throw errors.notFoundError
    }

    const isScheduleAvaiable = schedule.rows[0].avaiable 

    if(!isScheduleAvaiable) {
        throw appoitmentsErrors.AppoitmentScheduleUnavaiable
    }

    const statusIsValid = isValidStatus(status)

    if(!statusIsValid) {
        throw appoitmentsErrors.AppoitmentStatusInvalid
    }

    return

}

export default {
    createAppoitment,
    // updateAppoitmentStatus,
    // listPatientAppoitments,
    // listDoctorsAppoitments
}