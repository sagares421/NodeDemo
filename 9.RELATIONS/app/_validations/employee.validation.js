const Joi = require("joi");

module.exports = {
  create: {
    body: {
      name: Joi.string().required(),
      age: Joi.number().required(),
      email: Joi.string().required(),
      phone: Joi.string().required(),
      department: Joi.string().required(),
    },
  },
  update: {
    body: {
      name: Joi.string().required(),
      age: Joi.number().required(),
      email: Joi.string().required(),
      phone: Joi.string().required(),
      department: Joi.string().required(),
    },
  },
};
