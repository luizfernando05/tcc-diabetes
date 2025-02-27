import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateMedicalDataTable1740673396403 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'medical_data',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'patient_id',
            type: 'varchar',
          },
          {
            name: 'age',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'urea',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'cr',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'hba1c',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'chol',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'tg',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'hdl',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'ldl',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'vldl',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'bmi',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      'medical_data',
      new TableForeignKey({
        columnNames: ['patient_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'patients',
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('medical_data');
  }
}
