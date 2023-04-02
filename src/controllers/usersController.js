import httpStatus from "http-status"
import usersService from "../services/usersService.js"


async function signup(req, res, next){        
    const {name, email, password, typeUser, specialtyId, locationId} = req.body 
    try {       
        console.log('controller createUser user =>', specialtyId, locationId) 
       await usersService.signup({name, email, password, typeUser, specialtyId, locationId})    
       return res.sendStatus(httpStatus.CREATED)
      
    } catch (error) {        
        //return res.status(500).send(error.message)
        next(error)
    }
} 

async function signin(req, res, next){
    try {       
        const {email, password} = req.body
        const token = await usersService.signin({email, password})
        return res.status(httpStatus.OK).send({token})        
    } catch (error) {
        //return res.status(500).send(error.message)
        next(error)
    }

} 
export default {signup, signin}