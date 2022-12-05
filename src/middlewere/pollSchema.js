import joi from 'joi'

export const pollValidationSchema = joi.object({
    title: joi.object().required().string()
})