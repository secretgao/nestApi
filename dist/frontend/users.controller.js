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
exports.FUsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../service/users.service");
const users_dto_1 = require("../dto/users.dto");
let FUsersController = class FUsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async create(createUsersDto, res) {
        const user = await this.usersService.create(createUsersDto);
        res.status(common_1.HttpStatus.OK).json({
            statusCode: 200,
            data: user,
        });
    }
    async update(id, createUsersDto, res) {
        const updatedUser = await this.usersService.update(id, createUsersDto);
        res.status(common_1.HttpStatus.OK).json({
            statusCode: 200,
            data: updatedUser,
        });
    }
};
exports.FUsersController = FUsersController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.CreateUsersDto, Object]),
    __metadata("design:returntype", Promise)
], FUsersController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, users_dto_1.CreateUsersDto, Object]),
    __metadata("design:returntype", Promise)
], FUsersController.prototype, "update", null);
exports.FUsersController = FUsersController = __decorate([
    (0, common_1.Controller)('frontend-users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], FUsersController);
//# sourceMappingURL=users.controller.js.map