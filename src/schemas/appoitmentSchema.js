import joi from "joi"

export const appoitmentSchema = joi.object({
    scheduleId: joi.number().integer().required(),
    patientId: joi.number().integer().required(),
    status: joi.string().valid('AGENDADO', 'CANCELADO', 'CONFIRMADO')
})

export const appointmentUpdateStatusSchema = joi.object({
    status: joi.string().valid('AGENDADO', 'CANCELADO', 'CONFIRMADO')
})