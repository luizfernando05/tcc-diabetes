import CreateMedicalDataController from '@infra/http/controllers/MedicalData/CreateMedicalDataController';
import DeleteMedicalDataController from '@infra/http/controllers/MedicalData/DeleteMedicalDataController';
import GetByIdMedicalDataController from '@infra/http/controllers/MedicalData/GetByIdMedicalDataController';
import UpdateMedicalDataController from '@infra/http/controllers/MedicalData/UpdateMedicalDataController';
import { ensureDoctorAuthenticated } from '@infra/http/middleware/auth/ensureDoctorAuthenticated';
import { Router } from 'express';

const medicalDataRoutes = Router();
const createMedicalDataController = new CreateMedicalDataController();
const getByIdMedicalDataController = new GetByIdMedicalDataController();
const updateMedicalDataController = new UpdateMedicalDataController();
const deleteMedicalDataController = new DeleteMedicalDataController();

medicalDataRoutes.post('/', ensureDoctorAuthenticated, (req, res, next) => {
  createMedicalDataController.handle(req, res, next);
});

medicalDataRoutes.get('/:id', ensureDoctorAuthenticated, (req, res, next) => {
  getByIdMedicalDataController.handle(req, res, next);
});

medicalDataRoutes.put('/:id', ensureDoctorAuthenticated, (req, res, next) => {
  updateMedicalDataController.handle(req, res, next);
});

medicalDataRoutes.delete(
  '/:id',
  ensureDoctorAuthenticated,
  (req, res, next) => {
    deleteMedicalDataController.handle(req, res, next);
  }
);

export { medicalDataRoutes };
