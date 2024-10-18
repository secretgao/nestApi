import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUsersDto {
  @IsNotEmpty({ message: '帐号不能为空' })
  @IsString({ message: '帐号必须是字符串' })
  username: string;

  @IsNotEmpty({ message: '密码不能为空' })
  @IsString({ message: '密码必须是字符串' })
  password: string;

  @IsNotEmpty({ message: '头像不能为空' })
  @IsString({ message: '头像必须是字符串' })
  headImg: string;
  

}