import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminUsersService } from '../service/admin-users.service';
import { AdminUsersController } from '../backend/admin-users.controller';
import { AdminUser } from '../entity/admin-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminUser])],
  providers: [AdminUsersService],
  controllers: [AdminUsersController],
})
export class AdminUsersModule {}