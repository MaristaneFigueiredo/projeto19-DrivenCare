import connectionDb from "../config/database.js"


async function findByEmail({email}) {
    return await connectionDb.query(`
        SELECT * FROM users WHERE email =$1
    `, [email])
}


async function createUser({userId, typeUser}) {   

   if (typeUser === 'P') {
    await connectionDb.query(`
          SELECT * FROM patients WHERE email =$1
    `, [userId])
    } else {
        await connectionDb.query(`
        SELECT * FROM doctors WHERE email =$1
  `, [userId])
    }   
}



async function signup({name, email, password, typeUser}) {
    //console.log('repository - {name, email, password, typeUser}', {name, email, password, typeUser})
    await connectionDb.query( `
        INSERT INTO users (name, email, password, "typeUser") 
        VALUES ($1, $2, $3,$4)
    `, [name, email, password,typeUser])
}

async function createSession({userId, token}) {      

    await connectionDb.query( `
        INSERT INTO sessions ("userId", token) 
        VALUES ($1, $2)
    `, [userId, token])
}



export default {findByEmail, signup, createSession,createUser}

