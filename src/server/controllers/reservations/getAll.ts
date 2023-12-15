import { Request, Response } from 'express';

export const getAll = (req: Request, res: Response) => {
  return res.send('Get all reservations');
};