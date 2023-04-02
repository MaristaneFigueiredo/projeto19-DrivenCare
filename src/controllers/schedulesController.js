import httpStatus from "http-status"
import schedulesService from "../services/schedulesService.js"


async function getDoctorSchedules(req, res, next){            
    try {
        const { doctorId } = req.params
        const schedules = await schedulesService.getDoctorSchedules({doctorId})

        return res.send(schedules)
        
    } catch (error) {
        next(error)
    }
} 


export default {
    getDoctorSchedules,
 }