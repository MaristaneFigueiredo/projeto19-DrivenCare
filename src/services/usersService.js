import usersRepository from "../repositories/usersRepository.js"
import bcrypt from "bcrypt"

async function findByEmail({email}) {

   // const emailReceived = await usersRepository.findByEmail({email})
   const emailReceived = (await usersRepository.findByEmail({email})).rows
    console.log(' findByEmail - emailReceived', emailReceived)
     //if(!emailReceived) {
    if(emailReceived.length === 0) {    
         throw new Error ('This user does not exists!')
    }
    return emailReceived

}

async function signup({name, email, password, typeUser}) {    
    //{name, email, password} { name: 'teste1', email: 'teste1@gmail.com', password: 123456 }

    console.log(' usersServices {name, email, password, typeUser}', {name, email, password, typeUser})
    const emailReceived = await findByEmail({email})  
    console.log(' emailReceived', emailReceived)
    if(emailReceived) throw new Error ('This user already exists!')

    const hashPassword = await bcrypt.hash(password, 10)
    
    await usersRepository.signup({name, email, password: hashPassword, typeUser})

}

export default{signup}