import CreateMedicalDataController from '@infra/http/controllers/MedicalData/CreateMedicalDataController';
import GetByIdMedicalDataController from '@infra/http/controllers/MedicalData/GetByIdMedicalDataController';
import { Router } from 'express';

const medicalDataRoutes = Router();
const createMedicalDataController = new CreateMedicalDataController();
const getByIdMedicalDataController = new GetByIdMedicalDataController();

medicalDataRoutes.post('/', (req, res, next) => {
  createMedicalDataController.handle(req, res, next);
});

medicalDataRoutes.get('/:id', (req, res, next) => {
  getByIdMedicalDataController.handle(req, res, next);
});

export { medicalDataRoutes };
