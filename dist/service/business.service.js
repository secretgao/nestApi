"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const business_entity_1 = require("../entity/business.entity");
const admin_user_entity_1 = require("../entity/admin-user.entity");
let BusinessService = class BusinessService {
    constructor(businessRepository, adminUsersRepository, dataSource) {
        this.businessRepository = businessRepository;
        this.adminUsersRepository = adminUsersRepository;
        this.dataSource = dataSource;
    }
    async create(CreateBusinessDto) {
        const { username, phone, password, businessName, realName } = CreateBusinessDto;
        const existingUser = await this.adminUsersRepository.findOne({ where: { username } });
        if (existingUser) {
            throw new common_1.BadRequestException('管理员帐号已存在');
        }
        const existBusinessName = await this.businessRepository.findOne({ where: { businessName } });
        if (existingUser) {
            throw new common_1.BadRequestException('商家昵称已存在');
        }
        await this.dataSource.transaction(async (manager) => {
            const user = this.adminUsersRepository.create({ username, password });
            await manager.save(user);
            const adminUserId = user.id;
            const isOpen = 0;
            const business = this.businessRepository.create({ phone, businessName, realName, adminUserId, isOpen });
            await manager.save(business);
        });
    }
    async findAll(options) {
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
    async updateBusinessAndAdminUser(businessId, adminUserId, updateBusinessDto, updateAdminUserDto) {
        const bussinUser = await this.businessRepository.findOne({ where: { id: businessId } });
        if (!bussinUser) {
            throw new common_1.BadRequestException(`商家id:${businessId} 不存在`);
        }
        const adminUserUser = await this.adminUsersRepository.findOne({ where: { id: adminUserId } });
        if (!adminUserUser) {
            throw new common_1.BadRequestException(`商家对应的帐号id:${adminUserId} 不存在`);
        }
        await this.dataSource.transaction(async (manager) => {
            await manager.update(business_entity_1.Business, businessId, updateBusinessDto);
            await manager.update(admin_user_entity_1.AdminUser, adminUserId, updateAdminUserDto);
        });
    }
    async toggleBusinessOpenStatus(id) {
        const bussinUser = await this.businessRepository.findOne({ where: { id } });
        if (!bussinUser) {
            throw new common_1.BadRequestException(`商家id:${id} 不存在`);
        }
        bussinUser.isOpen = bussinUser.isOpen === 0 ? 1 : 0;
        await this.businessRepository.save(bussinUser);
    }
};
exports.BusinessService = BusinessService;
exports.BusinessService = BusinessService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(business_entity_1.Business)),
    __param(1, (0, typeorm_1.InjectRepository)(admin_user_entity_1.AdminUser)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource])
], BusinessService);
//# sourceMappingURL=business.service.js.map