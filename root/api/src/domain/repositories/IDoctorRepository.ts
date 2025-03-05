import Doctor from '@domain/entities/Doctors';

export interface IDoctorRepository {
  create(doctor: Doctor): Promise<Doctor>;
  findByEmail(email: string): Promise<Doctor | null>;
  findAll(): Promise<Doctor[]>;
  findById(id: string): Promise<Doctor | null>;
  update(doctor: Doctor): Promise<Doctor>;
}
