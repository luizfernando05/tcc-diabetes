import MedicalData from '@domain/entities/MedicalData';

export interface IMedicalDataRepository {
  create(medicalData: MedicalData): Promise<MedicalData>;
  findById(id: string): Promise<MedicalData | null>;
  findByPatientId(patientId: string): Promise<MedicalData | null>;
  update(medicalData: MedicalData): Promise<MedicalData>;
  delete(id: string): Promise<void>;
}
