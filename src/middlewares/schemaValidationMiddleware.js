import errors from "../errors/index.js"

function validationSchema(schema) {
    return (req, res, next) => {        
        const {error} = schema.validate(req.body, {abortEarly: false})       
        
        if (error) {                      
            const errorsMsg = error.details.map((detail) => detail.message);            
            throw errors.conflitctError(errorsMsg);          
        }
        
        next()
    }
}


export default validationSchema