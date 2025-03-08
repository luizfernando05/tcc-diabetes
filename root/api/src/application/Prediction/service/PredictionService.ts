import { AppError } from '@presentation/errors/AppError';
import {
  PredictionRequestDTO,
  PredictionResponseDTO,
} from '../dto/PredictionRequestDTO';
import axios from 'axios';

export class PredictionService {
  private apiUrl: string;

  constructor() {
    this.apiUrl = process.env.FLASK_API_URL || 'http://localhost:5000';
  }

  async predict(data: PredictionRequestDTO): Promise<PredictionResponseDTO> {
    try {
      const response = await axios.post(`${this.apiUrl}/predict`, data);

      const flaskResponse = response.data;

      const mappedResponse: PredictionResponseDTO = {
        predictionResult: flaskResponse.prediction_result,
        confidenceScore: flaskResponse.confidence_score,
      };

      return mappedResponse;
    } catch (err) {
      throw new AppError('Error communicating with prediction API', 500);
    }
  }
}

export default PredictionService;
