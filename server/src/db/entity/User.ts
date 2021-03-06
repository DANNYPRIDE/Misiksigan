import { BaseEntity, Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';

@Entity('User')
export class User extends BaseEntity {
  @PrimaryColumn()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  nickName: string;

  @Column()
  phoneNumber: string;

  @Column({ nullable: true })
  role: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  imageKey: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
