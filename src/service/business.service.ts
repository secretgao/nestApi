import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,DataSource } from 'typeorm';
import { Business } from '../entity/business.entity';
import { CreateBusinessDto } from '../dto/create-business.dto';
import { UpdateBusinessDto } from '../dto/update-business.dto';
import { CreateAdminUserDto } from '../dto/admin-user.dto';
import { PaginationDto } from '../dto/pagination.dto';
import { AdminUser } from 'src/entity/admin-user.entity';
@Injectable()

export class BusinessService {
  constructor(
    @InjectRepository(Business)
    private businessRepository: Repository<Business>,
    @InjectRepository(AdminUser)
    private adminUsersRepository: Repository<AdminUser>,
    private readonly dataSource: DataSource,
  ) {}

  async create(CreateBusinessDto: CreateBusinessDto): Promise<any> {

    const { username, phone, password, businessName, realName } = CreateBusinessDto;
    const existingUser = await this.adminUsersRepository.findOne({ where: { username } });
    if (existingUser) {
      throw new BadRequestException('管理员帐号已存在');
    }

    const existBusinessName = await this.businessRepository.findOne({ where: { businessName } });
    if (existingUser) {
      throw new BadRequestException('商家昵称已存在');
    }
    await this.dataSource.transaction(async manager => {
      const user = this.adminUsersRepository.create({ username,password });
      await manager.save(user);
      const adminUserId = user.id;
      const isOpen = 0;
      const business = this.businessRepository.create({ phone, businessName, realName ,adminUserId,isOpen});
      await manager.save(business);
    });
  }  
  async findAll(options: PaginationDto): 
  Promise<{ data: Business[]; total: number; page: number; limit: number }> {
    const { page, limit } = options;

    const [data, total] = await this.businessRepository
    .createQueryBuilder('business')
    .leftJoinAndSelect('business.adminUser', 'adminUser')
    .where('business.adminUserId IS NOT NULL')
    .skip((page - 1) * limit)
    .take(limit)
    .orderBy('adminUser.id', 'DESC')
    .getManyAndCount();
    return {
      data,
      total,
      page,
      limit,
    };
  }

  async updateBusinessAndAdminUser(
    businessId: number,
    adminUserId: number,
    updateBusinessDto: UpdateBusinessDto,
    updateAdminUserDto: CreateAdminUserDto,
  ): Promise<void> {

    const bussinUser = await this.businessRepository.findOne({ where: { id: businessId } });
    if (!bussinUser) {
      throw new BadRequestException(`商家id:${businessId} 不存在`);
    }

    const adminUserUser = await this.adminUsersRepository.findOne({ where: { id:adminUserId } });
    if (!adminUserUser) {
      throw new BadRequestException(`商家对应的帐号id:${adminUserId} 不存在`);
    }

    await this.dataSource.transaction(async (manager) => {
      await manager.update(Business, businessId, updateBusinessDto);
      await manager.update(AdminUser, adminUserId, updateAdminUserDto);
    });

  }
//帐号启用/关闭
  async toggleBusinessOpenStatus(id: number): Promise<void> {
    const bussinUser = await this.businessRepository.findOne({ where: { id } });
    if (!bussinUser) {
      throw new BadRequestException(`商家id:${id} 不存在`);
    }

    // 切换 isOpen 状态
    bussinUser.isOpen = bussinUser.isOpen === 0 ? 1 : 0;
     // 保存更新后的业务
    await this.businessRepository.save(bussinUser);
  }
}