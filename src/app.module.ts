import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadService } from './service/upload.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FrontendModule } from './frontend/frontend.module';
import { BackendModule } from './backend/backend.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [ 
     FrontendModule,
     BackendModule,
     ConfigModule.forRoot({
      envFilePath: '.env', // 指定 .env 文件路径
      isGlobal: true, // 如果希望在整个应用程序中全局使用配置模块
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, // 请勿在生产环境中使用
        logging: ['query', 'error', 'warn'], // 启用日志记录
      }),
      inject: [ConfigService],
    }),
    ],
  controllers: [AppController],
  providers: [AppService,UploadService],
})
export class AppModule {}
