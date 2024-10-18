import { Repository, DataSource } from 'typeorm';
import { Business } from '../entity/business.entity';
import { CreateBusinessDto } from '../dto/create-business.dto';
import { UpdateBusinessDto } from '../dto/update-business.dto';
import { CreateAdminUserDto } from '../dto/admin-user.dto';
import { PaginationDto } from '../dto/pagination.dto';
import { AdminUser } from 'src/entity/admin-user.entity';
export declare class BusinessService {
    private businessRepository;
    private adminUsersRepository;
    private readonly dataSource;
    constructor(businessRepository: Repository<Business>, adminUsersRepository: Repository<AdminUser>, dataSource: DataSource);
    create(CreateBusinessDto: CreateBusinessDto): Promise<any>;
    findAll(options: PaginationDto): Promise<{
        data: Business[];
        total: number;
        page: number;
        limit: number;
    }>;
    updateBusinessAndAdminUser(businessId: number, adminUserId: number, updateBusinessDto: UpdateBusinessDto, updateAdminUserDto: CreateAdminUserDto): Promise<void>;
    toggleBusinessOpenStatus(id: number): Promise<void>;
}
