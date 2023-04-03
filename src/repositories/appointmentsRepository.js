import connectionDb from "../config/database.js"
import schedulesService from "../services/schedulesService.js"


async function createAppoitment({ scheduleId, patientId, status }) {
    
    
    try {       
        const queryText=`INSERT INTO appointments(
                            "scheduleId", "patientId", status)
                            VALUES ($1, $2, $3);
        `
        await connectionDb.query(queryText, [ scheduleId, patientId, status])
    
    
        await schedulesService.setUnvaiableToSchedule(scheduleId)
    
        return
    } catch (error) {
   
        throw Error
    }
}


async function listPatientAppointments(patientId) {
    const queryText = `SELECT schedules.id, to_char(schedules."date", 'DD/MM/YYYY') as date,
                        schedules."timeInitial", users.name, specialties.name , 
                        locations.name, appointments.status  
                        FROM appointments INNER JOIN schedules ON appointments."scheduleId" = schedules.id  
                                        INNER JOIN doctors ON schedules."doctorId" = doctors.id 
                                        INNER JOIN locations ON doctors."locationId" = locations.id 
                                        INNER JOIN specialties ON doctors."specialtyId" = specialties.id 
                                        INNER JOIN users ON users.id = doctors."userId" 
                        WHERE appointments."patientId" = $1
                         `
    const patientAppointments = await connectionDb.query(queryText, [ patientId ])
    return patientAppointments.rows
}

export default {
    createAppoitment,
    // findAppoitmentById,
    // updateAppoitmentStatus,
    listPatientAppointments,
    // listDoctorsAppoitments
}