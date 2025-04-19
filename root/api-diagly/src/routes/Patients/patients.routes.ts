import CreatePatientController from '@infra/http/controllers/Patient/CreatePatientController';
import DeletePatientController from '@infra/http/controllers/Patient/DeletePatientController';
import GetByIdPatientController from '@infra/http/controllers/Patient/GetByIdPatientController';
import ListPatientController from '@infra/http/controllers/Patient/ListPatientController';
import LoginPatientController from '@infra/http/controllers/Patient/LoginPatientController';
import { UpdatePatientController } from '@infra/http/controllers/Patient/UpdatePatientController';
import { ensureDoctorAuthenticated } from '@infra/http/middleware/auth/ensureDoctorAuthenticated';
import { ensurePatientAutheticated } from '@infra/http/middleware/auth/ensurePatientAutheticated';
import { Router } from 'express';

const patientsRoutes = Router();
const createPatientController = new CreatePatientController();
const loginPatientController = new LoginPatientController();
const getByIdPatientController = new GetByIdPatientController();
const listPatientController = new ListPatientController();
const updatePatientController = new UpdatePatientController();
const deletePatientController = new DeletePatientController();

patientsRoutes.post('/', ensureDoctorAuthenticated, (req, res, next) => {
  createPatientController.handle(req, res, next);
});

patientsRoutes.post('/login', (req, res, next) => {
  loginPatientController.handle(req, res, next);
});

patientsRoutes.get('/:id', ensurePatientAutheticated, (req, res, next) => {
  getByIdPatientController.handle(req, res, next);
});

patientsRoutes.get('/', ensureDoctorAuthenticated, (req, res, next) => {
  listPatientController.handle(req, res, next);
});

patientsRoutes.put('/:id', ensurePatientAutheticated, (req, res, next) => {
  updatePatientController.handle(req, res, next);
});

patientsRoutes.delete('/:id', ensurePatientAutheticated, (req, res, next) => {
  deletePatientController.handle(req, res, next);
});

export { patientsRoutes };
