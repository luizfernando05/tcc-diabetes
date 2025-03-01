import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('predictions')
export class Prediction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'prediction_result', type: 'varchar' })
  predictionResult: string;

  @Column({ name: 'confidence_score', type: 'float' })
  confidenceScore: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}

export default Prediction;
