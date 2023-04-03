import connectionDb from "../config/database.js"

// async function createPatient( idUser ) {
//     const queryText = `INSERT INTO patients ("idUser")
//                         VALUES ($1)`
//     return await connectionDb.query(queryText, [ idUser ])
// }

async function findPatientById(id) {
    const queryText=`SELECT * FROM patients WHERE id = $1`
    const patient = await connectionDb.query(queryText, [ id ])
    return patient.rows
}




export default {
    //createPatient,
    findPatientById
    
}