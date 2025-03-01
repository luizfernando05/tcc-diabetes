import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('medical_data')
export class MedicalData {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int', nullable: false })
  age: number;

  @Column({ type: 'float', nullable: false })
  urea: number;

  @Column({ type: 'float', nullable: false })
  cr: number;

  @Column({ type: 'float', nullable: false })
  hba1c: number;

  @Column({ type: 'float', nullable: false })
  chol: number;

  @Column({ type: 'float', nullable: false })
  tg: number;

  @Column({ type: 'float', nullable: false })
  hdl: number;

  @Column({ type: 'float', nullable: false })
  ldl: number;

  @Column({ type: 'float', nullable: false })
  vldl: number;

  @Column({ type: 'float', nullable: false })
  bmi: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

export default MedicalData;
