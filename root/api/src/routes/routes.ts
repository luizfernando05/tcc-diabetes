import { Router } from 'express';
import { adminRoutes } from './Admin/admin.routes';
import { doctorRoutes } from './Doctor/doctor.routes';
import { patientsRoutes } from './Patients/patients.routes';
import { medicalDataRoutes } from './MedicalData/medicalData.routes';
import { predictionRoutes } from './Prediction/prediction.route';
import { adviceRoutes } from './Advice/advice.routes';

const routes = Router();

routes.use('/admins', adminRoutes);
routes.use('/doctors', doctorRoutes);
routes.use('/patients', patientsRoutes);
routes.use('/medical/data', medicalDataRoutes);
routes.use('/predictions', predictionRoutes);
routes.use('/advices', adviceRoutes);

export { routes };
