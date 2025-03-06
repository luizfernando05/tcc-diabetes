import CreateDoctorController from '@infra/http/controllers/Doctor/CreateDoctorController';
import GetByDoctorIdController from '@infra/http/controllers/Doctor/GetByIdDoctorController';
import ListDoctorController from '@infra/http/controllers/Doctor/ListDoctorController';
import LoginDoctorController from '@infra/http/controllers/Doctor/LoginDoctorController';
import UpdateDoctorController from '@infra/http/controllers/Doctor/UpdateDoctorController';
import { Router } from 'express';

const doctorRoutes = Router();
const createDoctorController = new CreateDoctorController();
const loginDoctorController = new LoginDoctorController();
const getByIdDoctorController = new GetByDoctorIdController();
const listDoctorController = new ListDoctorController();
const updateDoctorController = new UpdateDoctorController();

doctorRoutes.post('/', (req, res, next) => {
  createDoctorController.handle(req, res, next);
});

doctorRoutes.post('/login', (req, res, next) => {
  loginDoctorController.handle(req, res, next);
});

doctorRoutes.get('/:id', (req, res, next) => {
  getByIdDoctorController.handle(req, res, next);
});

doctorRoutes.get('/', (req, res, next) => {
  listDoctorController.handle(req, res, next);
});

doctorRoutes.put('/:id', (req, res, next) => {
  updateDoctorController.handle(req, res, next);
});

export { doctorRoutes };
