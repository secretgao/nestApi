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
exports.BusinessController = void 0;
const common_1 = require("@nestjs/common");
const business_service_1 = require("../service/business.service");
const create_business_dto_1 = require("../dto/create-business.dto");
const update_business_dto_1 = require("../dto/update-business.dto");
const admin_user_dto_1 = require("../dto/admin-user.dto");
const parse_int_pipe_1 = require("../common/pipes/parse-int-pipe");
const pipes_1 = require("@nestjs/common/pipes");
let BusinessController = class BusinessController {
    constructor(businessService) {
        this.businessService = businessService;
    }
    async findAll(page, limit, res) {
        const paginationDto = { page, limit };
        const data = await this.businessService.findAll(paginationDto);
        res.status(common_1.HttpStatus.OK).json({
            statusCode: 200,
            data
        });
    }
    async create(CreateBusinessDto, res) {
        const business = await this.businessService.create(CreateBusinessDto);
        res.status(common_1.HttpStatus.OK).json({
            statusCode: 200
        });
    }
    async update(businessId, adminUserId, updateBusinessDto, updateAdminUserDto, res) {
        const business = await this.businessService.updateBusinessAndAdminUser(businessId, adminUserId, updateBusinessDto, updateAdminUserDto);
        res.status(common_1.HttpStatus.OK).json({
            statusCode: 200,
            data: business,
        });
    }
    async updateIsOpen(businessId, res) {
        const result = await this.businessService.toggleBusinessOpenStatus(businessId);
        res.status(common_1.HttpStatus.OK).json({
            statusCode: 200,
            data: result,
        });
    }
};
exports.BusinessController = BusinessController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)('page', new pipes_1.DefaultValuePipe(1), parse_int_pipe_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new pipes_1.DefaultValuePipe(10), parse_int_pipe_1.ParseIntPipe)),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_business_dto_1.CreateBusinessDto, Object]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':businessId/admin-user/:adminUserId'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Param)('businessId')),
    __param(1, (0, common_1.Param)('adminUserId')),
    __param(2, (0, common_1.Body)('business')),
    __param(3, (0, common_1.Body)('adminUser')),
    __param(4, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, update_business_dto_1.UpdateBusinessDto,
        admin_user_dto_1.CreateAdminUserDto, Object]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':businessId/is-open'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Param)('businessId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "updateIsOpen", null);
exports.BusinessController = BusinessController = __decorate([
    (0, common_1.Controller)('business'),
    __metadata("design:paramtypes", [business_service_1.BusinessService])
], BusinessController);
//# sourceMappingURL=business.controller.js.map