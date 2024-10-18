import { Repository } from 'typeorm';
import { Users } from '../entity/users.entity';
import { CreateUsersDto } from '../dto/users.dto';
import { PaginationDto } from '../dto/pagination.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<Users>);
    findAll(options: PaginationDto): Promise<{
        data: Users[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: number): Promise<Users>;
    remove(id: number): Promise<void>;
    create(createUsersDto: CreateUsersDto): Promise<Users>;
    update(id: number, createUsersDto: CreateUsersDto): Promise<Users>;
}
