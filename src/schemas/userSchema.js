import joi from "joi"

// export const userSchema = joi.object({
//     name: joi.string().min(2).required(),
//     email:joi.string().email().required(),
//     password:joi.string().required(), 
//     typeUser:joi.string().allow("D", "P").required()        
// })


//firstname: Joi.alternatives().conditional('type', { is: 1, then: Joi.string().required() }),
// lastname: Joi.alternatives().conditional('type', { is: 1, then: Joi.string().required() }),

export const userSchema = joi.object({
    name: joi.string().max(100).required(),
    email: joi.string().email().max(100).required(),
    password: joi.string().max(100).required(),
    userType: joi.valid("D", "P"),
    locationId: joi.alternatives().conditional('userType', {
        is: "D",
        then: joi.number().required(),
        otherwise: joi.optional()
    })

})