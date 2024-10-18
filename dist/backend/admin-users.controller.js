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
exports.AdminUsersController = void 0;
const common_1 = require("@nestjs/common");
const admin_users_service_1 = require("../service/admin-users.service");
const admin_user_dto_1 = require("../dto/admin-user.dto");
const parse_int_pipe_1 = require("../common/pipes/parse-int-pipe");
const pipes_1 = require("@nestjs/common/pipes");
let AdminUsersController = class AdminUsersController {
    constructor(adminUsersService) {
        this.adminUsersService = adminUsersService;
    }
    async findAll(page, limit, res) {
        const paginationDto = { page, limit };
        const data = await this.adminUsersService.findAll(paginationDto);
        res.status(common_1.HttpStatus.OK).json({
            statusCode: 200,
            data
        });
    }
    findOne(id) {
        return this.adminUsersService.findOne(id);
    }
    async create(createAdminUserDto, res) {
        const adminUser = await this.adminUsersService.create(createAdminUserDto);
        res.status(common_1.HttpStatus.OK).json({
            statusCode: 200,
            data: adminUser,
        });
    }
    async remove(id, res) {
        const result = await this.adminUsersService.remove(id);
        res.status(common_1.HttpStatus.OK).json({
            statusCode: 200,
            data: id,
        });
    }
    async update(id, updateAdminUserDto, res) {
        const updatedAdminUser = await this.adminUsersService.update(id, updateAdminUserDto);
        res.status(common_1.HttpStatus.OK).json({
            statusCode: 200,
            data: updatedAdminUser,
        });
    }
};
exports.AdminUsersController = AdminUsersController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)('page', new pipes_1.DefaultValuePipe(1), parse_int_pipe_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new pipes_1.DefaultValuePipe(10), parse_int_pipe_1.ParseIntPipe)),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], AdminUsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminUsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_user_dto_1.CreateAdminUserDto, Object]),
    __metadata("design:returntype", Promise)
], AdminUsersController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AdminUsersController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, admin_user_dto_1.CreateAdminUserDto, Object]),
    __metadata("design:returntype", Promise)
], AdminUsersController.prototype, "update", null);
exports.AdminUsersController = AdminUsersController = __decorate([
    (0, common_1.Controller)('admin-users'),
    __metadata("design:paramtypes", [admin_users_service_1.AdminUsersService])
], AdminUsersController);
//# sourceMappingURL=admin-users.controller.js.map