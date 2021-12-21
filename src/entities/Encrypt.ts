import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, PrimaryColumn } from 'typeorm';

@Entity('encrypts')
export class Encrypt {
  @PrimaryColumn()
  id!: string;

  @Column({ name: 'encrypted_name' })
  name!: string;
}
