import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity()
export class BaseModel {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column({ default: false })
  visited: boolean;
}
