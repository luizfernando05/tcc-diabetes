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

  async findById(id: string): Promise<MedicalData | null> {
    return this.ormRepository.findOne({ where: { id } });
  }

  async findByPatientId(patientId: string): Promise<MedicalData | null> {
    return this.ormRepository.findOne({
      where: {
        patientId: { id: patientId },
      },
      relations: ['patientId'],
    });
  }

  async update(medicalData: MedicalData): Promise<MedicalData> {
    return this.ormRepository.save(medicalData);
  }

  async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default MedicalDataRepository;
