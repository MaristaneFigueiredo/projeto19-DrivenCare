import usersRepository from "../repositories/usersRepository.js"
import bcrypt from "bcrypt"
import {v4 as uuidV4} from "uuid" //biblioteca p o token


async function createUser({email, typeUser}) {

    const {rows : users} = await usersRepository.findByEmail({email})
    const [user] = users 
    await usersRepository.createUser({userId:user.id, typeUser:user.typeUser })
    

}

async function signup({name, email, password, typeUser}) {    
    
    const {rows: users } = await usersRepository.findByEmail({email}) 
    if(users.length !==0) throw new Error ('This user already exists!')
    

    const hashPassword = await bcrypt.hash(password, 10)
    
    await usersRepository.signup({name, email, password: hashPassword, typeUser})      

    createUser({email,typeUser})
}

async function signin({email, password}) {       

    const {rows: users } = await usersRepository.findByEmail({email})        
    if(users.length === 0) throw new Error ('Incorrect email or password!')
    
    const [user] = users    
     
    const passwordValid = await bcrypt.compare(password, user.password) === true    
    if(!passwordValid) throw new Error ('Incorrect email or password!')
    
    const token = uuidV4() 
    await usersRepository.createSession({userId: user.id, token})

    return token  
    

}

export default{signup, signin }