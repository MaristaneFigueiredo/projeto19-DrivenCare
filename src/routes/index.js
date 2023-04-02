import { Router } from "express";
import usersRouter from "./usersRouter.js";
import doctorsRouter from "./doctorsRouter.js"
// import appointmentsRouter from "./appointmentsRouter.js"
// import schedulesRouter from "./schedulesRouter.js"

const routes = Router()

routes.use("/users", usersRouter)

routes.use("/doctors", doctorsRouter)
// routes.use("/appointments", appointmentsRouter)
// routes.use("/schedules", schedulesRouter)

export default routes


