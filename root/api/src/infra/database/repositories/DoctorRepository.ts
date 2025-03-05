import Doctor from '@domain/entities/Doctors';
import { IDoctorRepository } from '@domain/repositories/IDoctorRepository';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';

export class DoctorRepository implements IDoctorRepository {
  private ormRepository: Repository<Doctor>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Doctor);
  }

  async create(doctor: Doctor): Promise<Doctor> {
    const newDoctor = this.ormRepository.create(doctor);
    return this.ormRepository.save(newDoctor);
  }

  async findByEmail(email: string): Promise<Doctor | null> {
    return this.ormRepository.findOne({ where: { email } });
  }

  async findAll(): Promise<Doctor[]> {
    return this.ormRepository.find();
  }

  async findById(id: string): Promise<Doctor | null> {
    return this.ormRepository.findOne({ where: { id } });
  }

  async update(doctor: Doctor): Promise<Doctor> {
    return this.ormRepository.save(doctor);
  }

  async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default DoctorRepository;
