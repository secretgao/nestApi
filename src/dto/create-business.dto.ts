// src/business/dto/create-business.dto.ts
import { IsString, IsOptional, IsInt, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateBusinessDto {
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => value ?? 0)
  sort?: number;

  @IsNotEmpty({ message: '商家手机号不能为空' })
  @IsString({ message: '商家手机号必须是字符串' })
  phone?: string;

  @IsNotEmpty({ message: '商家昵称不能为空' })
  @IsString({ message: '商家昵称必须是字符串' })
  businessName?: string;

  @IsOptional()
  @Transform(({ value }) => value ?? 0)
  isOpen: number;

  @IsNotEmpty({ message: '商家真实姓名不能为空' })
  @IsString({ message: '商家真实姓名必须是字符串' })
  realName?: string;

  @IsOptional()
  @IsInt()
  adminUserId?: number;

  @IsNotEmpty({ message: '管理员帐号不能为空' })
  @IsString({ message: '管理员帐号必须是字符串' })
  username: string;

  @IsNotEmpty({ message: '管理员密码不能为空' })
  @IsString({ message: '管理员密码必须是字符串' })
  password: string;
}