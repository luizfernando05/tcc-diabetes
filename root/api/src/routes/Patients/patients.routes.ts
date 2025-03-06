import CreatePatientController from '@infra/http/controllers/Patient/CreatePatientController';
import GetByIdPatientController from '@infra/http/controllers/Patient/GetByIdPatientController';
import LoginPatientController from '@infra/http/controllers/Patient/LoginPatientController';
import { Router } from 'express';

const patientsRoutes = Router();
const createPatientController = new CreatePatientController();
const loginPatientController = new LoginPatientController();
const getByIdPatientController = new GetByIdPatientController();

patientsRoutes.post('/', (req, res, next) => {
  createPatientController.handle(req, res, next);
});

patientsRoutes.post('/login', (req, res, next) => {
  loginPatientController.handle(req, res, next);
});

patientsRoutes.get('/:id', (req, res, next) => {
  getByIdPatientController.handle(req, res, next);
});

export { patientsRoutes };
