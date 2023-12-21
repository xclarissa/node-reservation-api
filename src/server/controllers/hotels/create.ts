import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { Hotels } from '../../database/models';

interface IBodyProps extends Omit<Hotels, 'id'> { }

export const createValidation = validation((getSchema) => ({
  body: getSchema<Hotels>(yup.object().shape(
    { 
      name: yup.string().required().min(3).max(150),
      address: yup.string().required().min(3),
      email: yup.string().email().required(),
      phone: yup.string().required(),
    }
  ))
}));

export const createRegistry = (req: Request<{}, {}, Hotels>, res: Response) => {
  console.log(req.body);
  return res.send('create!');
};  