import joi from "joi"

export const userSchema = joi.object({
     name: joi.string().min(2).required(),
     email:joi.string().email().required(),
     password:joi.string().required(),           
     typeUser:joi.string().valid("D", "P").required(), 
     locationId: joi.alternatives().conditional('typeUser', {
        is: "D",
        then: joi.number().required(),
        otherwise: joi.optional()
    }),
    specialtyId: joi.alternatives().conditional('typeUser', {
        is: "D",
        then: joi.number().required(),
        otherwise: joi.optional()
    }) 
 })
