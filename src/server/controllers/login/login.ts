import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
  return res.send('login');
};