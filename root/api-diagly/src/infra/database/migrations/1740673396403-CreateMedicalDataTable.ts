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
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'patient_id',
            type: 'uuid',
          },
          {
            name: 'age',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'urea',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'cr',
            type: 'float',
            isNullable: true,
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
            isNullable: true,
          },
          {
            name: 'ldl',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'vldl',
            type: 'float',
            isNullable: true,
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
