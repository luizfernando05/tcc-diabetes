import CreatePatientController from '@infra/http/controllers/Patient/CreatePatientController';
import { Router } from 'express';

const patientsRoutes = Router();
const createPatientController = new CreatePatientController();

patientsRoutes.post('/', (req, res, next) => {
  createPatientController.handle(req, res, next);
});

export { patientsRoutes };
