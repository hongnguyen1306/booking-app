import { Column, Entity, ObjectId, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'destinations' })
export class Destination {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name: string;
}