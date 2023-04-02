import { Router } from "express";
import usersRouter from "./usersRouter.js";
import doctorsRouter from "./doctorsRouter.js"
import schedulesRoutes from "./schedulesRouter.js"
// import appointmentsRouter from "./appointmentsRouter.js"


const routes = Router()

routes.use("/users", usersRouter)

routes.use("/doctors", doctorsRouter)

routes.use("/schedules", schedulesRoutes)
// routes.use("/appointments", appointmentsRouter)


export default routes


