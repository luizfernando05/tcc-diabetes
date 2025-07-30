import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Patient from './Patient';

@Entity('medical_data')
export class MedicalData {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Patient, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'patient_id' })
  patientId: Patient;

  @Column({ type: 'int', nullable: false })
  age: number;

  @Column({ type: 'float', nullable: true })
  urea: number;

  @Column({ type: 'float', nullable: true })
  cr: number;

  @Column({ type: 'float', nullable: false })
  hba1c: number;

  @Column({ type: 'float', nullable: false })
  chol: number;

  @Column({ type: 'float', nullable: false })
  tg: number;

  @Column({ type: 'float', nullable: true })
  hdl: number;

  @Column({ type: 'float', nullable: true })
  ldl: number;

  @Column({ type: 'float', nullable: true })
  vldl: number;

  @Column({ type: 'float', nullable: false })
  bmi: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

export default MedicalData;
