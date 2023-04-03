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


export default {
    createAppoitment,
    // findAppoitmentById,
    // updateAppoitmentStatus,
    // listPatientAppoitments,
    // listDoctorsAppoitments
}