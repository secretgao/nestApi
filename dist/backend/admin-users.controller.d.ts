import { Response } from 'express';
import { AdminUsersService } from '../service/admin-users.service';
import { AdminUser } from '../entity/admin-user.entity';
import { CreateAdminUserDto } from '../dto/admin-user.dto';
export declare class AdminUsersController {
    private readonly adminUsersService;
    constructor(adminUsersService: AdminUsersService);
    findAll(page: number, limit: number, res: Response): Promise<void>;
    findOne(id: number): Promise<AdminUser>;
    create(createAdminUserDto: CreateAdminUserDto, res: Response): Promise<void>;
    remove(id: number, res: Response): Promise<void>;
    update(id: number, updateAdminUserDto: CreateAdminUserDto, res: Response): Promise<void>;
}
