import CreateDoctorController from '@infra/http/controllers/Doctor/CreateDoctorController';
import GetByDoctorIdController from '@infra/http/controllers/Doctor/GetByIdDoctorController';
import LoginDoctorController from '@infra/http/controllers/Doctor/LoginDoctorController';
import { Router } from 'express';

const doctorRoutes = Router();
const createDoctorController = new CreateDoctorController();
const loginDoctorController = new LoginDoctorController();
const getByIdDoctorController = new GetByDoctorIdController();

doctorRoutes.post('/', (req, res, next) => {
  createDoctorController.handle(req, res, next);
});

doctorRoutes.post('/login', (req, res, next) => {
  loginDoctorController.handle(req, res, next);
});

doctorRoutes.get('/:id', (req, res, next) => {
  getByIdDoctorController.handle(req, res, next);
});

export { doctorRoutes };
