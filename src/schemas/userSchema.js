import joi from "joi"

export const userSchema = joi.object({
    name: joi.string().min(2).required(),
    email:joi.string().email().required(),
    password:joi.string().required(), 
    //type:joi.string().min(1).max(1).required().validate('p').validate('d')   
})

