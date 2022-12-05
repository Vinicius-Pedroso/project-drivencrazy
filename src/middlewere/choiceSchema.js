import joi from 'joi'

export const choiceValidationSchema = joi.object({
    title: joi.object().required().string()
})