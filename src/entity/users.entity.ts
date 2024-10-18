import { Entity, Column, PrimaryGeneratedColumn ,CreateDateColumn} from 'typeorm';

@Entity('users')   //实体名称: @Entity('users') 中的参数 'users' 是数据库中的表名。
export class Users {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: true, comment: '帐号' })
  username: string;

  @Column({ type: 'varchar', length: 100, nullable: true, comment: '密码' })
  password: string;

  @CreateDateColumn({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)' })
  createdAt: Date;
  @Column({ type: 'int', unsigned: true, nullable: true, comment: '余额，单位分', default:()=>0 })
  amount: number;

  @Column({ type: 'varchar', length: 255, nullable: true, comment: '头像' })
  headImg: string;
}