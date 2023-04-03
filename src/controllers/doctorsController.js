import httpStatus from "http-status"
import doctorsService from "../services/doctorsService.js"


async function getDoctors(req, res, next){        
    const {name, specialtyId, locationId} = req.query 
    try {              
       const doctors = await doctorsService.getDoctors({name, specialtyId, locationId})    
       return res.send(doctors)
      
    } catch (error) {      
        console.error(error)
        next(error)
    }
} 


export default {
    getDoctors,
 }