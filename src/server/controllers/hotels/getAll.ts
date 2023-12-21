import { Request, Response } from 'express';
import { Hotels } from '../../database/models';

export const getAll = (req: Request<{}, {}, Hotels>, res: Response) => {
  console.log(req.body);
  return res.send('Get all Hotels');
};