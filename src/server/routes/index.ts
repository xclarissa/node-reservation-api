import { Router } from 'express';
import { HotelsController, ReservationsController, RoomsController, SignUpController, UsersController } from '../controllers';
import { LoginController } from '../controllers/login';

const router = Router();

router.get('/', (_, res) => {
  return res.send('Conected!');
});

router.get('/hotels', HotelsController.getAll);
router.get('/hotels/:id', HotelsController.getById);
router.put('/hotels/:id', HotelsController.updateRegistry);
router.delete('/hotels/:id', HotelsController.deleteRegistry);

router.post('/login', LoginController.login);
router.post('/signup', SignUpController.signUp);

router.get('/reservations', ReservationsController.getAll);
router.get('/reservations/:id', ReservationsController.getById);
router.put('/reservations/:id', ReservationsController.updateRegistry);
router.delete('/reservations/:id', ReservationsController.deleteRegistry);

router.get('/rooms', RoomsController.getAll);
router.get('/rooms/:id', RoomsController.getById);
router.put('/rooms/:id', RoomsController.updateRegistry);
router.delete('/rooms/:id', RoomsController.deleteRegistry);

router.get('/users', UsersController.getAll);
router.get('/users/:id', UsersController.getById);
router.put('/users/:id', UsersController.updateRegistry);
router.delete('/users/:id', UsersController.deleteRegistry);


export { router };