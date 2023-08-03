import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'destinations' })
export class Destination {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name: string;
}