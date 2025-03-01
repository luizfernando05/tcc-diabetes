import CreateAdminController from '@infra/http/controllers/Admin/CreateAdminController';
import { Router } from 'express';

const adminRoutes = Router();
const createAdminController = new CreateAdminController();

adminRoutes.post('/login', (req, res, next) => {
  createAdminController.handle(req, res, next);
});

export { adminRoutes };
