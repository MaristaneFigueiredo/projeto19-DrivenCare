import httpStatus from "http-status";
import appointmentsService from "../services/appointmentsService.js";


async function createAppoitment(req, res, next) {
    try {
        const { scheduleId, patientId, status } = req.body
        
        await appointmentsService.createAppoitment({ scheduleId, patientId, status })

        return res.sendStatus(httpStatus.OK)
    } catch (error) {
        // if( error.name === "AppoitmentScheduleUnavaiable") {
        //     return response.status(httpStatus.BAD_REQUEST).send("Esta agenda não está disponível")    
        // }
        // if( error.name === "AppoitmentStatusInvalid") {
        //     return response.status(httpStatus.BAD_REQUEST).send("Status de agendamento inválido")    
        // }
        // if(error.name === "NotFound") {
        //     return response.status(httpStatus.BAD_REQUEST).send("Agendamento não encontrado")    
        // }      
        // return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Internal server error")

        next(error)
    }
}



export default {
    createAppoitment,
    // updateAppoitmentStatus,
    // listPatientAppoitments,
    // listDoctorAppoitments
}