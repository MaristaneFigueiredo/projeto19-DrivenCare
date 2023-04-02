import usersRepository from "../repositories/usersRepository.js"
import bcrypt from "bcrypt"
import {v4 as uuidV4} from "uuid" //biblioteca p o token
import errors from "../errors/index.js"


async function createUser({email, typeUser, specialtyId, locationId}) {

    const {rows : users} = await usersRepository.findByEmail({email})    
    const [user] = users 
     
    console.log('service createUser user =>', specialtyId, locationId)
    await usersRepository.createUser({userId:user.id, typeUser:user.typeUser, specialtyId, locationId})
    

}

async function signup({name, email, password, typeUser, specialtyId, locationId}) {    
    
    const {rows: users } = await usersRepository.findByEmail({email}) 
    if(users.length !==0) throw errors.duplicatedEmailError()
    

    const hashPassword = await bcrypt.hash(password, 10)
    
    await usersRepository.signup({name, email, password: hashPassword, typeUser})      

    createUser({email,typeUser, specialtyId, locationId})
}

async function signin({email, password}) {       

    const {rows: users } = await usersRepository.findByEmail({email})        
    /* if(users.length === 0) throw new Error ('Incorrect email or password!') */
    if(users.length === 0) throw errors.invalidCredentialsError()
    
    const [user] = users    
     
    const passwordValid = await bcrypt.compare(password, user.password) === true    
    if(!passwordValid) throw errors.invalidCredentialsError()
    
    const token = uuidV4() 
    await usersRepository.createSession({userId: user.id, token})

    return token  
    

}

export default{signup, signin }