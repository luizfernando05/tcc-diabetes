import Patient from '@domain/entities/Patient';

export interface IPatientRepository {
  create(patient: Patient): Promise<Patient>;
}
