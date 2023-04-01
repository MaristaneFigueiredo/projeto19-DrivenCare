import httpStatus from "http-status"

export function handleApplicationErros(error, req, res, next) {
    if (error.name === "ConflictError" || error.name === "DuplicatedEmailError") {
        return res.status(httpStatus.CONFLICT).send({
          message: error.message,
        });
      }

      if (err.name === "InvalidCredentialsError") {
        return res.status(httpStatus.UNAUTHORIZED).send({
          message: err.message,
        });
      }
      
      if (err.name === "UnauthorizedError") {
        return res.status(httpStatus.UNAUTHORIZED).send({
          message: err.message,
        });
      }
      
      if (err.name === "NotFoundError") {
        return res.status(httpStatus.NOT_FOUND).send({
          message: err.message,
        });
      }

      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: "InternalServerError",
        message: "Internal Server Error",
      });

}