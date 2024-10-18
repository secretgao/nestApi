import { Controller, Query,Post, Body,Get,Put,Param,Delete, UsePipes, ValidationPipe, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from '../service/users.service';
import { Users } from '../entity/users.entity';
import { CreateUsersDto } from '../dto/users.dto';
import { PaginationDto } from '../dto/pagination.dto';
import { ParseIntPipe } from '../common/pipes/parse-int-pipe';
import { DefaultValuePipe } from '@nestjs/common/pipes';
@Controller('backend-users')
export class BUsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  async findAll(
    @Query('page', new DefaultValuePipe(1),ParseIntPipe) page: number,
    @Query('limit',new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Res() res: Response,
  ): Promise<void> {
    const paginationDto: PaginationDto = { page, limit };
    const data = await  this.usersService.findAll(paginationDto);
    res.status(HttpStatus.OK).json({
      statusCode: 200,
      data
    });
  }
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Users> {
    return this.usersService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))

  async create(
    @Body() createAdminUserDto: CreateUsersDto,
    @Res() res: Response,
  ): Promise<void> {
    const adminUser: Users = await this.usersService.create(createAdminUserDto);
    res.status(HttpStatus.OK).json({
      statusCode: 200,
      data: adminUser,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: number,@Res() res: Response,): Promise<void> {
    const result =  await this.usersService.remove(id);
    res.status(HttpStatus.OK).json({
      statusCode: 200,
      data: id,
    });
  }
  @Put(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async update(
    @Param('id') id: number,
    @Body() updateAdminUserDto: CreateUsersDto,
    @Res() res: Response,
  ): Promise<void> {
    const updatedAdminUser: Users = await this.usersService.update(id, updateAdminUserDto);
    res.status(HttpStatus.OK).json({
      statusCode: 200,
      data: updatedAdminUser,
    });
  }
}