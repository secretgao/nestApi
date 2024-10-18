import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from '../service/users.service';
import { FUsersController } from '../frontend/users.controller';
import { BUsersController } from '../backend/users.controller';
import { Users } from '../entity/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UsersService],
  controllers: [FUsersController,BUsersController],
})
export class UsersModule {}