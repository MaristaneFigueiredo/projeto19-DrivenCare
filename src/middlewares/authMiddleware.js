import httpStatus from "http-status"
import errors from "../errors/index.js";
import usersRepository from "../repositories/usersRepository.js"


async function authValidation(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");   
    try {

      if (!token) {  
        throw errors.unathorizedError()
      }

      const {
        rows: [session],
      } = await usersRepository.findSessionByToken(token);
      if (!session) throw errors.unathorizedError()
      
  
      const {
        rows: [user],
      } = await usersRepository.findById(session.userId);
      if (!user) throw errors.notFoundError();
  
      res.locals.user = user;
      next();
    } catch (err) {      
      return res.status(httpStatus.UNAUTHORIZED).send("Not authorized!")
     // next(err);
    }
  }
  
  export default { authValidation };