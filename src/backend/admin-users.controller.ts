import { Controller, Query,Post, Body,Get,Put,Param,Delete, UsePipes, ValidationPipe, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { AdminUsersService } from '../service/admin-users.service';
import { AdminUser } from '../entity/admin-user.entity';
import { CreateAdminUserDto } from '../dto/admin-user.dto';
import { PaginationDto } from '../dto/pagination.dto';
import { ParseIntPipe } from '../common/pipes/parse-int-pipe';
import { DefaultValuePipe } from '@nestjs/common/pipes';
@Controller('admin-users')
export class AdminUsersController {
  constructor(private readonly adminUsersService: AdminUsersService) {}

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  async findAll(
    @Query('page', new DefaultValuePipe(1),ParseIntPipe) page: number,
    @Query('limit',new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Res() res: Response,
  ): Promise<void> {
    const paginationDto: PaginationDto = { page, limit };
    const data = await  this.adminUsersService.findAll(paginationDto);
    res.status(HttpStatus.OK).json({
      statusCode: 200,
      data
    });
  }
  @Get(':id')
  findOne(@Param('id') id: number): Promise<AdminUser> {
    return this.adminUsersService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))

  async create(
    @Body() createAdminUserDto: CreateAdminUserDto,
    @Res() res: Response,
  ): Promise<void> {
    const adminUser: AdminUser = await this.adminUsersService.create(createAdminUserDto);
    res.status(HttpStatus.OK).json({
      statusCode: 200,
      data: adminUser,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: number,@Res() res: Response,): Promise<void> {
    const result =  await this.adminUsersService.remove(id);
    res.status(HttpStatus.OK).json({
      statusCode: 200,
      data: id,
    });
  }
  @Put(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async update(
    @Param('id') id: number,
    @Body() updateAdminUserDto: CreateAdminUserDto,
    @Res() res: Response,
  ): Promise<void> {
    const updatedAdminUser: AdminUser = await this.adminUsersService.update(id, updateAdminUserDto);
    res.status(HttpStatus.OK).json({
      statusCode: 200,
      data: updatedAdminUser,
    });
  }
}