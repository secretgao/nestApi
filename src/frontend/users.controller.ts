import { Controller, Query,Post, Body,Get,Put,Param,Delete, UsePipes, ValidationPipe, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from '../service/users.service';
import { Users } from '../entity/users.entity';
import { CreateUsersDto } from '../dto/users.dto';

@Controller('frontend-users')
export class FUsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(
    @Body() createUsersDto: CreateUsersDto,
    @Res() res: Response,
  ): Promise<void> {
    const user: Users = await this.usersService.create(createUsersDto);
    res.status(HttpStatus.OK).json({
      statusCode: 200,
      data: user,
    });
  }

 
  @Put(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async update(
    @Param('id') id: number,
    @Body() createUsersDto: CreateUsersDto,
    @Res() res: Response,
  ): Promise<void> {
    const updatedUser: Users = await this.usersService.update(id, createUsersDto);
    res.status(HttpStatus.OK).json({
      statusCode: 200,
      data: updatedUser,
    });
  }
}
