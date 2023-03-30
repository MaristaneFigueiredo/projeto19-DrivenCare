import connectionDb from "../config/database.js"

//import connection from "../db/db.js";

// export function selectHashtag (body) {
//     return connection.query('SELECT * FROM hashtags WHERE name = $1', [body])
// }

async function findByEmail({email}) {
    return connectionDb.query(`
        SELECT * FROM users WHERE email =$1
    `, [email])
}



async function signup({name, email, password, typeUser}) {
    connectionDb.query( `
        INSERT INTO users (name, email, password, "typeUser") VALUES ($1, $2, $3,$4)
    `, [name, email, password,typeUser])
}
export default {findByEmail, signup}

