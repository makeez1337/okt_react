import Joi from "joi";


export const carValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[a-zA-ZА-яёËіІїЇґҐ]{1,20}$')).required().messages({
        'string.empty': ' "model" cant be empty',
        'string.pattern.base': 'only letters min 1 max 20'
    }),
    price: Joi.number().min(0).max(1000000).messages({
        'number.base': 'price can be from 1 to 1 000 000',
        'number.min': 'should be equal or more than 0',
        'number.max': 'cant be more than 1 000 000'
    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        'number.base': 'year can be from 1900 to 2022',
        'number.min': 'year cant be less than 1900',
        'number.max': 'year cant be more than 2022'
    }),
})


export const carDeleteValidator = Joi.object({
    delete: Joi.number().positive().required().messages({
        'number.positive': 'Number must be positive'
    })
})

export const carUpdateValidator = Joi.object({
    id: Joi.number().positive().required().messages({
        'number.positive': 'Number must be positive'
    }),
    fieldKey: Joi.string().valid('model', 'price', 'year').required(),
    fieldValue:
        Joi.when('fieldKey', [
            {is: 'model', then: Joi.string().regex(new RegExp('^[a-zA-ZА-яёËіІїЇґҐ]{1,20}$')).required()},
            {is: 'year', then: Joi.number().min(1990).max(new Date().getFullYear()).required()},
            {is: 'price',then: Joi.number().min(0).max(1000000).required()}
        ])

})

