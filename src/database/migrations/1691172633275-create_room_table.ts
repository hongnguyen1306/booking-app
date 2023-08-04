import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateRoomTable1691172633275 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "rooms",
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: 'destination_id',
                    type: 'uuid',
                },
                {
                    name: "room_number",
                    type: "varchar",
                },
                {
                    name: 'created_at',
                    type: 'datetime',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'datetime',
                    default: 'now()',
                }
            ]
        }), true)

        await queryRunner.createForeignKey(
            'rooms',
            new TableForeignKey({
              columnNames: ['destination_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'destinations',
              onDelete: 'CASCADE',
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('rooms');
    }

}
