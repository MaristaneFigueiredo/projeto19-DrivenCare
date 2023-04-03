import connectionDb from "../config/database.js"


async function getDoctorSchedules({doctorId}) {
  

    const { rows: schedules } = await connectionDb.query(
        `
        SELECT schedules.id, TO_CHAR(schedules."date", 'DD/MM/YYYY') as date,
        schedules."timeInitial", users.name, specialties.name , 
        locations.name 
        FROM schedules INNER JOIN doctors ON schedules."doctorId" = doctors.id 
                        INNER JOIN locations ON doctors."locationId" = locations.id 
                        INNER JOIN specialties ON doctors."specialtyId" = specialties.id 
                        INNER JOIN users ON users.id = doctors."userId" 
        WHERE schedules.avaiable = true	AND 
        "doctorId" = $1
        `,
        [doctorId]
      );
    return schedules
    
}

async function setUnavaiableSchedule(scheduleId) {
  const queryText =` UPDATE schedules SET avaiable = false, "updatedAt" = NOW()
                      WHERE id = $1
                  `
  return await connectionDb.query(queryText, [ scheduleId ])
}


async function findScheludeById(id) {
  const queryText = `SELECT * FROM schedules WHERE id = $1`
  return await connectionDb.query(queryText, [ id ])
}

export default {
  getDoctorSchedules,
  setUnavaiableSchedule,
  findScheludeById
}
