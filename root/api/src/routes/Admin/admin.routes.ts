import CreateAdminController from '@infra/http/controllers/Admin/CreateAdminController';
import { LoginAdminController } from '@infra/http/controllers/Admin/LoginAdminController';
import { Router } from 'express';

const adminRoutes = Router();
const createAdminController = new CreateAdminController();
const loginAdminController = new LoginAdminController();

adminRoutes.post('/', (req, res, next) => {
  createAdminController.handle(req, res, next);
});

adminRoutes.post('/login', (req, res, next) => {
  loginAdminController.handle(req, res, next);
});

export { adminRoutes };
