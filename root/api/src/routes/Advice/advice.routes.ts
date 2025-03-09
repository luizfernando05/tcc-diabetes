import GenerateAdviceController from '@infra/http/controllers/Advice/GenerateAdviceController';
import { Router } from 'express';

const adviceRoutes = Router();
const generateAdviceController = new GenerateAdviceController();

adviceRoutes.get('/:patientId', (req, res, next) => {
  generateAdviceController.handle(req, res, next);
});

export { adviceRoutes };
