import CreateMedicalDataController from '@infra/http/controllers/MedicalData/CreateMedicalDataController';
import { Router } from 'express';

const medicalDataRoutes = Router();
const createMedicalDataController = new CreateMedicalDataController();

medicalDataRoutes.post('/', (req, res, next) => {
  createMedicalDataController.handle(req, res, next);
});

export { medicalDataRoutes };
