import httpStatus from "http-status"
import doctorsService from "../services/doctorsService.js"


async function getDoctors(req, res, next){        
    const {name, specialtyId, locationId} = req.query 
    try {              
       const doctors = await doctorsService.getByDoctor({name, specialtyId, locationId})    
       return res.sendStatus(httpStatus.OK).send(doctors)
      
    } catch (error) {      
        
        next(error)
    }
} 


export default {
    getDoctors,
 }