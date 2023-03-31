import usersService from "../services/usersService.js"


async function signup(req, res){    
    
    const {name, email, password, typeUser} = req.body    

    try {
        //console.log('controller - {name, email, password, typeUser}', {name, email, password, typeUser})
       await usersService.signup({name, email, password, typeUser})
       return res.sendStatus(201)
    } catch (error) {
        //return res.status(500).send('Internal server error!')
        return res.status(500).send(error.message)
    }
} 

async function signin(req, res){
    try {       
        const {email, password} = req.body
        const token = await usersService.signin({email, password})

        return res.status(200).send({token})
    } catch (error) {
        return res.status(500).send(error.message)
    }

} 
export default {signup, signin}