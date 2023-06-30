import Joi from 'joi';
import { Dog } from '../models/Dog.model';

export const dogDataValidate = (data: Dog) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(25).required(),
    color: Joi.string().min(2).max(30).required(),
    tailLength: Joi.number().positive().min(1).max(40).required(),
    weight: Joi.number().positive().min(1).max(80).required()
  });
  return schema.validate(data);
};