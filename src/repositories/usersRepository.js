import connectionDb from "../config/database.js"


async function findByEmail({email}) {
    return await connectionDb.query(`
        SELECT * FROM users WHERE email =$1
    `, [email])
}


async function createUser({userId, typeUser, specialtyId, locationId}) {   
  
   if (typeUser === 'P') {
    await connectionDb.query(`
            INSERT INTO patients ("userId") 
            VALUES ($1)
             `, [userId])
    } else {      
        await connectionDb.query(`        
        INSERT INTO doctors ("userId", "specialtyId", "locationId") 
        VALUES ($1, $2, $3)
        `, [userId, specialtyId, locationId])
    }   
}



async function signup({name, email, password, typeUser}) {
    
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

async function findSessionByToken(token) {
    return await connectionDb.query(
      `
          SELECT * FROM sessions WHERE token = $1
      `,
      [token]
    );
  }

  async function findById(id) {
    return await connectionDb.query(
      `    
      SELECT * FROM users WHERE id=$1
    `,
      [id]
    );
  }

export default {findByEmail, signup, createSession,createUser, findSessionByToken, findById}

