import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { AdminUser } from './admin-user.entity';

@Entity('business')
export class Business {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ type: 'int', unsigned: true, nullable: true, comment: '排序' ,default: 0})
  sort: number;

  @Column({ type: 'varchar', length: 255, nullable: true, comment: '联系电话' })
  phone: string;

  @Column({ type: 'varchar', length: 50, nullable: true, comment: '商家昵称' })
  businessName: string;

  @Column({ type: 'tinyint', unsigned: true, default: 0, comment: '是否开启：0关闭/1开启' })
  isOpen: number;

  @Column({ type: 'varchar', length: 255, nullable: true, comment: '真实姓名' })
  realName: string;

  @Column({ type: 'int', unsigned: true, nullable: true, comment: '商家关联adminusers 后台登录' })
  adminUserId: number;

  @CreateDateColumn({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
  updatedAt: Date;

  @OneToOne(() => AdminUser, adminUser => adminUser.business)
  @JoinColumn({ name: 'adminUserId' })
  adminUser: AdminUser;
}