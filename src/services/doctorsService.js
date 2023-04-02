import { Router } from "express";
import doctorsRepository from "../repositories/doctorsRepository.js";



async function getDoctors({name, specialtyId, locationId}){        
            
       return await doctorsRepository.getDoctors({name, specialtyId, locationId})             
  
} 






export default {getDoctors}