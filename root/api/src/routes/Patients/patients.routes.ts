import CreatePatientController from '@infra/http/controllers/Patient/CreatePatientController';
import GetByIdPatientController from '@infra/http/controllers/Patient/GetByIdPatientController';
import { Router } from 'express';

const patientsRoutes = Router();
const createPatientController = new CreatePatientController();
const getByIdPatientController = new GetByIdPatientController();

patientsRoutes.post('/', (req, res, next) => {
  createPatientController.handle(req, res, next);
});

patientsRoutes.get('/:id', (req, res, next) => {
  getByIdPatientController.handle(req, res, next);
});

export { patientsRoutes };
