import CreateDoctorController from '@infra/http/controllers/Doctor/CreateDoctorController';
import DeleteDoctorController from '@infra/http/controllers/Doctor/DeleteDoctorController';
import GetByDoctorIdController from '@infra/http/controllers/Doctor/GetByIdDoctorController';
import ListDoctorController from '@infra/http/controllers/Doctor/ListDoctorController';
import LoginDoctorController from '@infra/http/controllers/Doctor/LoginDoctorController';
import UpdateDoctorController from '@infra/http/controllers/Doctor/UpdateDoctorController';
import { ensureAdminAuthenticated } from '@infra/http/middleware/auth/ensureAdminAuthenticated';
import { ensureDoctorAuthenticated } from '@infra/http/middleware/auth/ensureDoctorAuthenticated';
import { Router } from 'express';

const doctorRoutes = Router();
const createDoctorController = new CreateDoctorController();
const loginDoctorController = new LoginDoctorController();
const getByIdDoctorController = new GetByDoctorIdController();
const listDoctorController = new ListDoctorController();
const updateDoctorController = new UpdateDoctorController();
const deleteDoctorController = new DeleteDoctorController();

doctorRoutes.post('/', ensureAdminAuthenticated, (req, res, next) => {
  createDoctorController.handle(req, res, next);
});

doctorRoutes.post('/login', (req, res, next) => {
  loginDoctorController.handle(req, res, next);
});

doctorRoutes.get('/:id', ensureDoctorAuthenticated, (req, res, next) => {
  getByIdDoctorController.handle(req, res, next);
});

doctorRoutes.get('/', ensureAdminAuthenticated, (req, res, next) => {
  listDoctorController.handle(req, res, next);
});

doctorRoutes.put('/:id', ensureDoctorAuthenticated, (req, res, next) => {
  updateDoctorController.handle(req, res, next);
});

doctorRoutes.delete('/:id', ensureDoctorAuthenticated, (req, res, next) => {
  deleteDoctorController.handle(req, res, next);
});

export { doctorRoutes };
