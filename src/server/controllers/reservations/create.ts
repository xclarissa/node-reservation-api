import { Request, Response } from 'express';

interface Reservations {
  customer_id: string;
  hotel_id: string;
  room_id: string;
  check_in: string;
  check_out: string;
}

export const createRegistry = (req: Request<{}, {}, Reservations>, res: Response) => {
  return res.send('create Hotel');
};