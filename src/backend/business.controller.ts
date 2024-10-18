import { Controller, Query,Post, Body,Get,Put,Param,Delete, UsePipes, ValidationPipe, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { BusinessService } from '../service/business.service';
import { Business } from '../entity/business.entity';
import { CreateBusinessDto } from '../dto/create-business.dto';
import { UpdateBusinessDto } from '../dto/update-business.dto';
import { CreateAdminUserDto } from '../dto/admin-user.dto';
import { PaginationDto } from '../dto/pagination.dto';
import { ParseIntPipe } from '../common/pipes/parse-int-pipe';
import { DefaultValuePipe } from '@nestjs/common/pipes';
@Controller('business')
export class BusinessController {
  constructor(
    private readonly businessService: BusinessService
  ) {}

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  async findAll(
    @Query('page', new DefaultValuePipe(1),ParseIntPipe) page: number,
    @Query('limit',new DefaultValuePipe(10), ParseIntPipe) limit: number,
   @Res() res: Response,
  ): Promise<void> {
    const paginationDto: PaginationDto = { page, limit };
    const data = await  this.businessService.findAll(paginationDto);
    res.status(HttpStatus.OK).json({
      statusCode: 200,
      data
    });
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(
    @Body() CreateBusinessDto:CreateBusinessDto,
    @Res() res: Response,
  ): Promise<void> {

    const business: Business = await this.businessService.create(CreateBusinessDto);
    res.status(HttpStatus.OK).json({
      statusCode: 200
    });
  }

  @Put(':businessId/admin-user/:adminUserId')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async update(
    @Param('businessId') businessId: number,
    @Param('adminUserId') adminUserId: number,
    @Body('business') updateBusinessDto: UpdateBusinessDto,
    @Body('adminUser') updateAdminUserDto: CreateAdminUserDto,
    @Res() res: Response,
  ): Promise<void> {

    const business  = await this.businessService.updateBusinessAndAdminUser(
      businessId,
      adminUserId,
      updateBusinessDto,
      updateAdminUserDto,
    );
    res.status(HttpStatus.OK).json({
      statusCode: 200,
      data: business,
    });
  }
  @Put(':businessId/is-open')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async updateIsOpen(
    @Param('businessId') businessId: number,
    @Res() res: Response,
  ): Promise<void> {

    const result = await this.businessService.toggleBusinessOpenStatus(businessId);
    res.status(HttpStatus.OK).json({
      statusCode: 200,
      data: result,
    });
  }
}