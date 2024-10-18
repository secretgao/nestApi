import { Module } from '@nestjs/common';
import { UsersModule } from '../module/users.module';

@Module({
  imports: [UsersModule],
})
export class FrontendModule {}