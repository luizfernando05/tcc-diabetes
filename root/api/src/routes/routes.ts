import { Router } from 'express';
import { adminRoutes } from './Admin/admin.routes';
import { doctorRoutes } from './Doctor/doctor.routes';

const routes = Router();

routes.use('/admins', adminRoutes);
routes.use('/doctors', doctorRoutes);

export { routes };
