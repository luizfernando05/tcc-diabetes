import Patient from '@domain/entities/Patient';
import { IPatientRepository } from '@domain/repositories/IPatientRepository';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';

export class PatientRepository implements IPatientRepository {
  private ormRepository: Repository<Patient>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Patient);
  }

  async create(patient: Patient): Promise<Patient> {
    const newPatient = this.ormRepository.create(patient);
    return this.ormRepository.save(newPatient);
  }

  async findByEmail(email: string): Promise<Patient | null> {
    return this.ormRepository.findOne({ where: { email } });
  }

  async findAll(): Promise<Patient[]> {
    return this.ormRepository.find();
  }

  async findById(id: string): Promise<Patient | null> {
    return this.ormRepository.findOne({ where: { id } });
  }

  async update(patient: Patient): Promise<Patient> {
    return this.ormRepository.save(patient);
  }

  async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default PatientRepository;
