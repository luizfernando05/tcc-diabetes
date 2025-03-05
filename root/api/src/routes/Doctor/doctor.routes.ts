import CreateDoctorController from '@infra/http/controllers/Doctor/CreateDoctorController';
import LoginDoctorController from '@infra/http/controllers/Doctor/LoginDoctorController';
import { Router } from 'express';

const doctorRoutes = Router();
const createDoctorController = new CreateDoctorController();
const loginDoctorController = new LoginDoctorController();

doctorRoutes.post('/', (req, res, next) => {
  createDoctorController.handle(req, res, next);
});

doctorRoutes.post('/login', (req, res, next) => {
  loginDoctorController.handle(req, res, next);
});

export { doctorRoutes };
