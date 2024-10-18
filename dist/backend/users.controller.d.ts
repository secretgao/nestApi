import { Response } from 'express';
import { UsersService } from '../service/users.service';
import { Users } from '../entity/users.entity';
import { CreateUsersDto } from '../dto/users.dto';
export declare class BUsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(page: number, limit: number, res: Response): Promise<void>;
    findOne(id: number): Promise<Users>;
    create(createAdminUserDto: CreateUsersDto, res: Response): Promise<void>;
    remove(id: number, res: Response): Promise<void>;
    update(id: number, updateAdminUserDto: CreateUsersDto, res: Response): Promise<void>;
}
