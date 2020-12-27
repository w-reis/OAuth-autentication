import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  auth_provider_id: string;

  @Column()
  avatar: string;

  @Column()
  name: string;

  @Column()
  email: string;
}

export default User;
