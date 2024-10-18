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
exports.AdminUsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const admin_user_entity_1 = require("../entity/admin-user.entity");
let AdminUsersService = class AdminUsersService {
    constructor(adminUsersRepository) {
        this.adminUsersRepository = adminUsersRepository;
    }
    async findAll(options) {
        const { page, limit } = options;
        const [data, total] = await this.adminUsersRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
            order: {
                id: 'DESC',
            },
        });
        return {
            data,
            total,
            page,
            limit,
        };
    }
    findOne(id) {
        return this.adminUsersRepository.findOne({ where: { id } });
    }
    async remove(id) {
        const adminUser = await this.adminUsersRepository.findOne({ where: { id } });
        if (!adminUser) {
            throw new common_1.BadRequestException(`管理员id: ${id} 不存在`);
        }
        await this.adminUsersRepository.delete(id);
    }
    async create(createAdminUserDto) {
        const { username, password } = createAdminUserDto;
        const existingUser = await this.adminUsersRepository.findOne({ where: { username } });
        if (existingUser) {
            throw new common_1.BadRequestException('管理员帐号已存在');
        }
        const adminUser = this.adminUsersRepository.create({ username, password });
        return this.adminUsersRepository.save(adminUser);
    }
    async update(id, updateAdminUserDto) {
        const adminUser = await this.adminUsersRepository.findOne({ where: { id } });
        if (!adminUser) {
            throw new common_1.BadRequestException(`管理员id: ${id} 不存在`);
        }
        Object.assign(adminUser, updateAdminUserDto);
        return this.adminUsersRepository.save(adminUser);
    }
};
exports.AdminUsersService = AdminUsersService;
exports.AdminUsersService = AdminUsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(admin_user_entity_1.AdminUser)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AdminUsersService);
//# sourceMappingURL=admin-users.service.js.map