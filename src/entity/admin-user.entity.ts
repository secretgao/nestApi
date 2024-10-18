import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';
import { Business } from './business.entity';

@Entity('admin_users')
export class AdminUser {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  username: string;

  @Column({ type: 'varchar', length: 40, nullable: true })
  password: string;

  @Column({ type: 'tinyint', unsigned: true, default: 0 })
  isSuper: number;

  @CreateDateColumn({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
  updatedAt: Date;

  @OneToOne(() => Business, business => business.adminUser)
  business: Business;
}