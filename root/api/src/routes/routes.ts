import { Router } from 'express';
import { adminRoutes } from './Admin/admin.routes';
import { doctorRoutes } from './Doctor/doctor.routes';
import { patientsRoutes } from './Patients/patients.routes';

const routes = Router();

routes.use('/admins', adminRoutes);
routes.use('/doctors', doctorRoutes);
routes.use('/patients', patientsRoutes);

export { routes };
