import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAdminUserDto {
  @IsNotEmpty({ message: '管理员帐号不能为空' })
  @IsString({ message: '管理员帐号必须是字符串' })
  username: string;

  @IsNotEmpty({ message: '管理员密码不能为空' })
  @IsString({ message: '管理员密码必须是字符串' })
  password: string;

  
}