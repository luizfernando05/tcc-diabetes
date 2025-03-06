import CreatePatientController from '@infra/http/controllers/Patient/CreatePatientController';
import GetByIdPatientController from '@infra/http/controllers/Patient/GetByIdPatientController';
import ListPatientController from '@infra/http/controllers/Patient/ListPatientController';
import LoginPatientController from '@infra/http/controllers/Patient/LoginPatientController';
import { UpdatePatientController } from '@infra/http/controllers/Patient/UpdatePatientController';
import { Router } from 'express';

const patientsRoutes = Router();
const createPatientController = new CreatePatientController();
const loginPatientController = new LoginPatientController();
const getByIdPatientController = new GetByIdPatientController();
const listPatientController = new ListPatientController();
const updatePatientController = new UpdatePatientController();

patientsRoutes.post('/', (req, res, next) => {
  createPatientController.handle(req, res, next);
});

patientsRoutes.post('/login', (req, res, next) => {
  loginPatientController.handle(req, res, next);
});

patientsRoutes.get('/:id', (req, res, next) => {
  getByIdPatientController.handle(req, res, next);
});

patientsRoutes.get('/', (req, res, next) => {
  listPatientController.handle(req, res, next);
});

patientsRoutes.put('/:id', (req, res, next) => {
  updatePatientController.handle(req, res, next);
});

export { patientsRoutes };
