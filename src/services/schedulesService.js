import schedulesRepository from "../repositories/schedulesRepository.js";



async function getDoctorSchedules({doctorId}){                        
      return await schedulesRepository.getDoctorSchedules({doctorId})
  
} 






export default {getDoctorSchedules}