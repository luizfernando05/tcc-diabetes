import CreateMedicalDataController from '@infra/http/controllers/MedicalData/CreateMedicalDataController';
import GetByIdMedicalDataController from '@infra/http/controllers/MedicalData/GetByIdMedicalDataController';
import UpdateMedicalDataController from '@infra/http/controllers/MedicalData/UpdateMedicalDataController';
import { Router } from 'express';

const medicalDataRoutes = Router();
const createMedicalDataController = new CreateMedicalDataController();
const getByIdMedicalDataController = new GetByIdMedicalDataController();
const updateMedicalDataController = new UpdateMedicalDataController();

medicalDataRoutes.post('/', (req, res, next) => {
  createMedicalDataController.handle(req, res, next);
});

medicalDataRoutes.get('/:id', (req, res, next) => {
  getByIdMedicalDataController.handle(req, res, next);
});

medicalDataRoutes.put('/:id', (req, res, next) => {
  updateMedicalDataController.handle(req, res, next);
});

export { medicalDataRoutes };
