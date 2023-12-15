import { Request, Response } from 'express';

export const getById = (req: Request, res: Response) => {
  return res.send('get hotel by id');
};