import { Router } from 'express';
import { adminRoutes } from './Admin/admin.routes';

const routes = Router();

routes.use('/admins', adminRoutes);

export { routes };
