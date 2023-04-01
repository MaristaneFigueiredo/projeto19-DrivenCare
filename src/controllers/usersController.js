import usersService from "../services/usersService.js"


async function signup(req, res){        
    const {name, email, password, typeUser} = req.body 
    try {       
       await usersService.signup({name, email, password, typeUser})
       return res.sendStatus(201)
    } catch (error) {        
        //return res.status(500).send(error.message)
        next(error)
    }
} 

async function signin(req, res){
    try {       
        const {email, password} = req.body
        const token = await usersService.signin({email, password})

        return res.status(200).send({token})
    } catch (error) {
        //return res.status(500).send(error.message)
        next(error)
    }

} 
export default {signup, signin}