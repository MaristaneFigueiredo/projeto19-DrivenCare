import schedulesRepository from "../repositories/schedulesRepository.js";



async function getDoctorSchedules({doctorId}){          
                 
      return await schedulesRepository.getDoctorSchedules({doctorId})
  
} 

async function setUnvaiableToSchedule(scheduleId) {
      return await schedulesRepository.setUnavaiableSchedule(scheduleId)
  }






export default {
      getDoctorSchedules,
      setUnvaiableToSchedule

}