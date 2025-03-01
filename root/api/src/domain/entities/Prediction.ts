import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Patient from './Patient';

@Entity('predictions')
export class Prediction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Patient, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @Column({ name: 'prediction_result', type: 'varchar' })
  predictionResult: string;

  @Column({ name: 'confidence_score', type: 'float' })
  confidenceScore: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}

export default Prediction;
