import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessService } from '../service/business.service';
import { BusinessController } from '../backend/business.controller';
import { Business } from '../entity/business.entity';
import { AdminUser } from '../entity/admin-user.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Business,AdminUser])],
  providers: [BusinessService],
  controllers: [BusinessController],
})
export class BusinessModule {}