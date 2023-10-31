const Joi = require('joi');
const EMP = require('../Models/EmpModel');


exports.validatedata = (schema) => {
    return (req, res, next) => {
      const { error } = schema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      next();
    };
  };  
  
exports.AddEmp = Joi.object({
        Empname : Joi.string().required(),
        Email : Joi.string().required(),
        Phone : Joi.number().required(),
        Address : Joi.string().required().trim(),
        PasswordHash : Joi.string().required()
    })
