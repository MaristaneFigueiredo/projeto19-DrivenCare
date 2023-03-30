import express, {json} from "express"
import cors from "cors"
import dotenv, { config } from "dotenv"
import routes from "./routes/index.js"

dotenv.config()


const server = express()
server.use(json()) 
server.use(cors())

server.use(routes)


const port = process.env.PORT || 6000
server.listen(port, () => console.log(`Server running in port: ${port}`))