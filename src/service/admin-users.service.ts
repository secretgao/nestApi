import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminUser } from '../entity/admin-user.entity';
import { CreateAdminUserDto } from '../dto/admin-user.dto';
import { PaginationDto } from '../dto/pagination.dto';

@Injectable()

export class AdminUsersService {
  constructor(
    @InjectRepository(AdminUser)
    private adminUsersRepository: Repository<AdminUser>,
  ) {}

  async findAll(options: PaginationDto): 
  Promise<{ data: AdminUser[]; total: number; page: number; limit: number }> {
    const { page, limit } = options;
    const [data, total] = await this.adminUsersRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: {
        id: 'DESC', // Add this line to sort by id in descending order
      },
    });

    
    return {
      data,
      total,
      page,
      limit,
    };
  }

  findOne(id: number): Promise<AdminUser> {
    return this.adminUsersRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    const adminUser = await this.adminUsersRepository.findOne({ where: { id } });

    if (!adminUser) {
      throw new BadRequestException(`管理员id: ${id} 不存在`);
    }
    await this.adminUsersRepository.delete(id);
  }

  async create(createAdminUserDto: CreateAdminUserDto): Promise<AdminUser> {
    const { username, password } = createAdminUserDto;

    // Check if username already exists
    const existingUser = await this.adminUsersRepository.findOne({ where: { username } });
    if (existingUser) {
      throw new BadRequestException('管理员帐号已存在');
    }

    const adminUser = this.adminUsersRepository.create({ username, password });
    return this.adminUsersRepository.save(adminUser);
    
  }
  async update(id: number, updateAdminUserDto: CreateAdminUserDto): Promise<AdminUser> {
    const adminUser = await this.adminUsersRepository.findOne({ where: { id } });

    if (!adminUser) {
      throw new BadRequestException(`管理员id: ${id} 不存在`);
    }

    Object.assign(adminUser, updateAdminUserDto);
    return this.adminUsersRepository.save(adminUser);
  }
}