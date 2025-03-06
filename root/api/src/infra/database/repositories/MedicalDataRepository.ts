import MedicalData from '@domain/entities/MedicalData';
import { IMedicalDataRepository } from '@domain/repositories/IMedicalDataRepository';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';

export class MedicalDataRepository implements IMedicalDataRepository {
  private ormRepository: Repository<MedicalData>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(MedicalData);
  }

  async create(medicalData: MedicalData): Promise<MedicalData> {
    const newMedicalData = this.ormRepository.create(medicalData);
    return this.ormRepository.save(newMedicalData);
  }
}

export default MedicalDataRepository;
