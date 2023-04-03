import connectionDb from "../config/database.js"


async function getDoctors({name, specialtyId, locationId}) {
    
    let query = `
        SELECT users.name as doctor, locations.name as location, specialties.name as specialty        
        FROM doctors INNER JOIN users ON users.id = doctors."userId"
                     INNER JOIN locations ON doctors."locationId" = locations.id 
                    INNER JOIN specialties ON doctors."specialtyId" = specialties.id 
        WHERE    
        `
        if (name) {
            query += `users.name ILIKE '%${name}%' `
            if (specialtyId || locationId)
                query += 'AND'
        }
        if( specialtyId ) {
            query += ` "specialtyId" = ${specialtyId}`
            if(locationId) 
            query += ` AND `
        }
        if(locationId) {
            query += ` "locationId" = ${locationId}`
        }
        console.log(query)
        const doctors = await connectionDb.query(query)
        return doctors.rows
}



export default {getDoctors}
