import { Response } from 'express';
import { BusinessService } from '../service/business.service';
import { CreateBusinessDto } from '../dto/create-business.dto';
import { UpdateBusinessDto } from '../dto/update-business.dto';
import { CreateAdminUserDto } from '../dto/admin-user.dto';
export declare class BusinessController {
    private readonly businessService;
    constructor(businessService: BusinessService);
    findAll(page: number, limit: number, res: Response): Promise<void>;
    create(CreateBusinessDto: CreateBusinessDto, res: Response): Promise<void>;
    update(businessId: number, adminUserId: number, updateBusinessDto: UpdateBusinessDto, updateAdminUserDto: CreateAdminUserDto, res: Response): Promise<void>;
    updateIsOpen(businessId: number, res: Response): Promise<void>;
}
