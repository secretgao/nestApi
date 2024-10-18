import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entity/users.entity';
import { CreateUsersDto } from '../dto/users.dto';
import { PaginationDto } from '../dto/pagination.dto';

@Injectable()

export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async findAll(options: PaginationDto): 
  Promise<{ data: Users[]; total: number; page: number; limit: number }> {
    const { page, limit } = options;
    const [data, total] = await this.usersRepository.findAndCount({
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

  findOne(id: number): Promise<Users> {
    return this.usersRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    const adminUser = await this.usersRepository.findOne({ where: { id } });

    if (!adminUser) {
      throw new BadRequestException(`管理员id: ${id} 不存在`);
    }
    await this.usersRepository.delete(id);
  }

  async create(createUsersDto: CreateUsersDto): Promise<Users> {
    const { username, password,headImg } = createUsersDto;

    // Check if username already exists
    const existingUser = await this.usersRepository.findOne({ where: { username } });
    if (existingUser) {
      throw new BadRequestException('帐号已存在');
    }

    const Users = this.usersRepository.create({ username, password ,headImg});
    return this.usersRepository.save(Users);
  
  }

  async update(id: number, createUsersDto: CreateUsersDto): Promise<Users> {
    const User = await this.usersRepository.findOne({ where: { id } });

    if (!User) {
      throw new BadRequestException(`id: ${id} 不存在`);
    }

    Object.assign(User, createUsersDto);
    return this.usersRepository.save(User);
  }
}