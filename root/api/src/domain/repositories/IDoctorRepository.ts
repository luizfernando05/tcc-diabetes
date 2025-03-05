import Doctor from '@domain/entities/Doctors';

export interface IDoctorRepository {
  create(doctor: Doctor): Promise<Doctor>;
}
