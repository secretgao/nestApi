import { Repository } from 'typeorm';
import { AdminUser } from '../entity/admin-user.entity';
import { CreateAdminUserDto } from '../dto/admin-user.dto';
import { PaginationDto } from '../dto/pagination.dto';
export declare class AdminUsersService {
    private adminUsersRepository;
    constructor(adminUsersRepository: Repository<AdminUser>);
    findAll(options: PaginationDto): Promise<{
        data: AdminUser[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: number): Promise<AdminUser>;
    remove(id: number): Promise<void>;
    create(createAdminUserDto: CreateAdminUserDto): Promise<AdminUser>;
    update(id: number, updateAdminUserDto: CreateAdminUserDto): Promise<AdminUser>;
}
