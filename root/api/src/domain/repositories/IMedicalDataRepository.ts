import MedicalData from '@domain/entities/MedicalData';

export interface IMedicalDataRepository {
  create(medicalData: MedicalData): Promise<MedicalData>;
}
