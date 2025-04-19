import PredictionController from '@infra/http/controllers/Prediction/PredictionController';
import { Router } from 'express';

const predictionRoutes = Router();
const predictionController = new PredictionController();

predictionRoutes.post('/', (req, res, next) => {
  predictionController.handle(req, res, next);
});

export { predictionRoutes };
