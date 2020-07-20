const Joi = require("joi");

module.exports = {
  registerUser: {
    body: {
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  },
  loginUser: {
    body: {
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  },
};
