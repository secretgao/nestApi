import { Response } from 'express';
import { UsersService } from '../service/users.service';
import { CreateUsersDto } from '../dto/users.dto';
export declare class FUsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUsersDto: CreateUsersDto, res: Response): Promise<void>;
    update(id: number, createUsersDto: CreateUsersDto, res: Response): Promise<void>;
}
