import { Module } from '@nestjs/common';
import { AdminUsersModule } from '../module/admin-users.module';
import { BusinessModule } from '../module/business.module';
@Module({
  imports: [
    AdminUsersModule,
    BusinessModule
  ],
})
export class BackendModule {}