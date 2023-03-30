import usersService from "../services/usersService.js"


async function signup(req, res){
    
    //req.body = { name: 'teste1', email: 'teste1@gmail.com', password: 123456 }
    const {name, email, password, typeUser} = req.body
    //console.log('typeof name', typeof(name))

    try {
       await usersService.signup({name, email, password, typeUser})
       return res.sendStatus(201)
    } catch (error) {
        //return res.status(500).send('Internal server error!')
        return res.status(500).send(error.message)
    }
} 

async function signin(){

} 
export default {signup, signin}