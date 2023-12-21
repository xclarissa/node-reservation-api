import { Request, Response } from 'express';

interface Room {
  room_name: string
  total_occupants: string
  hotel_id: string
  customer_id: string
  price: string
  status: string
}

export const createRegistry = (req: Request<{}, {}, Room>, res: Response) => {

  return res.send('create Hotel');
};