// src/business/dto/update-business.dto.ts
import { IsString, IsOptional, IsInt, IsBoolean ,IsNotEmpty} from 'class-validator';
import { Transform } from 'class-transformer';
export class UpdateBusinessDto {
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

}