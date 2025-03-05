import CreateDoctorController from '@infra/http/controllers/Doctor/CreateDoctorController';
import { Router } from 'express';

const doctorRoutes = Router();
const createDoctorController = new CreateDoctorController();

doctorRoutes.post('/', (req, res, next) => {
  createDoctorController.handle(req, res, next);
});

export { doctorRoutes };
