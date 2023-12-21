import { Router } from 'express';
import {
  HotelsController,
  LoginController,
  ReservationsController,
  RoomsController,
  SignUpController,
  UsersController
} from '../controllers';

const router = Router();

router.get('/', (_, res) => {
  return res.send('You are Conected!');
});

router.get('/hotels', HotelsController.getAll);
router.get('/hotels/:id', HotelsController.getById);
router.post('/hotels', HotelsController.createValidation, HotelsController.createRegistry);
router.put('/hotels/:id', HotelsController.updateRegistry);
router.delete('/hotels/:id', HotelsController.deleteRegistry);

router.post('/login', LoginController.login);
router.post('/signup', SignUpController.signUp);

router.get('/reservations', ReservationsController.getAll);
router.get('/reservations/:id', ReservationsController.getById);
router.post('/reservations', ReservationsController.createRegistry);
router.put('/reservations/:id', ReservationsController.updateRegistry);
router.delete('/reservations/:id', ReservationsController.deleteRegistry);

router.get('/rooms', RoomsController.getAll);
router.get('/rooms/:id', RoomsController.getById);
router.post('/rooms', RoomsController.createRegistry);
router.put('/rooms/:id', RoomsController.updateRegistry);
router.delete('/rooms/:id', RoomsController.deleteRegistry);

router.get('/users', UsersController.getAll);
router.get('/users/:id', UsersController.getById);
router.put('/users/:id', UsersController.updateRegistry);
router.delete('/users/:id', UsersController.deleteRegistry);


export { router };