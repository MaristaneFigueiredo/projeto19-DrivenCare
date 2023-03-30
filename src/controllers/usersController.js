
async function signup(req, res){
    console.log('req.body =', req.body)
    const {name, email, password} = req.body
    console.log('name', name)

    try {
        await usersService.signup()
        return res.sendStatus(201)
    } catch (error) {
        return res.status(500).send('Internal server error!')
    }
} 

async function signin(){

} 
export default {signup, signin}