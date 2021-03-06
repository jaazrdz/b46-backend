const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
    signup: celebrate({
        [Segments.BODY]: Joi
            .object()
            .keys({
                email: Joi.string().email().required(),
                first_name: Joi.string().required(),
                last_name: Joi.string().required(),
                birth_date: Joi.date(),
                password: Joi.string().required(),
            }),
    }),
    login: celebrate({
        [Segments.BODY]: Joi
            .object()
            .keys({
                email: Joi.string().email().required(),
                password: Joi.string().required(),
            }),
    }),
};