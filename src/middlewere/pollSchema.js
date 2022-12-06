import joi from 'joi'

export const pollValidationSchema = joi.object({
    title: joi.string().required()
})