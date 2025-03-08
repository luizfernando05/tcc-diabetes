import CreateAdminController from '@infra/http/controllers/Admin/CreateAdminController';
import DeleteAdminController from '@infra/http/controllers/Admin/DeleteAdminController';
import GetAdminByIdController from '@infra/http/controllers/Admin/getByIdAdminController';
import ListAdminController from '@infra/http/controllers/Admin/ListAdminController';
import { LoginAdminController } from '@infra/http/controllers/Admin/LoginAdminController';
import { UpdateAdminController } from '@infra/http/controllers/Admin/UpdateAdminController';
import { ensureAdminAuthenticated } from '@infra/http/middleware/auth/ensureAdminAuthenticated';
import { Router } from 'express';

const adminRoutes = Router();
const createAdminController = new CreateAdminController();
const loginAdminController = new LoginAdminController();
const updateAdminController = new UpdateAdminController();
const getAdminByIdController = new GetAdminByIdController();
const listAdminController = new ListAdminController();
const deleteAdminController = new DeleteAdminController();

adminRoutes.post('/', ensureAdminAuthenticated, (req, res, next) => {
  createAdminController.handle(req, res, next);
});

adminRoutes.post('/login', (req, res, next) => {
  loginAdminController.handle(req, res, next);
});

adminRoutes.put('/:id', ensureAdminAuthenticated, (req, res, next) => {
  updateAdminController.handle(req, res, next);
});

adminRoutes.get('/:id', ensureAdminAuthenticated, (req, res, next) => {
  getAdminByIdController.handle(req, res, next);
});

adminRoutes.get('/', ensureAdminAuthenticated, (req, res, next) => {
  listAdminController.handle(req, res, next);
});

adminRoutes.delete('/:id', ensureAdminAuthenticated, (req, res, next) => {
  deleteAdminController.handle(req, res, next);
});

export { adminRoutes };
