import Prediction from '@domain/entities/Prediction';

export interface IPredictionRepository {
  create(prediction: Prediction): Promise<Prediction>;
  findLatestByPatientId(patientId: string): Promise<Prediction | null>;
}
