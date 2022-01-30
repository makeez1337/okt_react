import Joi from "joi";

export const carValidator = Joi.object({
    model: Joi.string().required().pattern(/^[A-Za-z]*$/).messages({
        'string.pattern.base':'should contain symbols A-Z,a-z'
    }),
    year: Joi.number().required().integer().greater(1990).less(2021),
    price: Joi.number().required().integer().greater(1000).less(100001)
})


