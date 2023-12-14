import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
  return res.send('Conected!');
});


export { router };