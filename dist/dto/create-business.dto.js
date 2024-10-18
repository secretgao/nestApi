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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBusinessDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateBusinessDto {
}
exports.CreateBusinessDto = CreateBusinessDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Transform)(({ value }) => value ?? 0),
    __metadata("design:type", Number)
], CreateBusinessDto.prototype, "sort", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '商家手机号不能为空' }),
    (0, class_validator_1.IsString)({ message: '商家手机号必须是字符串' }),
    __metadata("design:type", String)
], CreateBusinessDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '商家昵称不能为空' }),
    (0, class_validator_1.IsString)({ message: '商家昵称必须是字符串' }),
    __metadata("design:type", String)
], CreateBusinessDto.prototype, "businessName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value ?? 0),
    __metadata("design:type", Number)
], CreateBusinessDto.prototype, "isOpen", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '商家真实姓名不能为空' }),
    (0, class_validator_1.IsString)({ message: '商家真实姓名必须是字符串' }),
    __metadata("design:type", String)
], CreateBusinessDto.prototype, "realName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateBusinessDto.prototype, "adminUserId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '管理员帐号不能为空' }),
    (0, class_validator_1.IsString)({ message: '管理员帐号必须是字符串' }),
    __metadata("design:type", String)
], CreateBusinessDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '管理员密码不能为空' }),
    (0, class_validator_1.IsString)({ message: '管理员密码必须是字符串' }),
    __metadata("design:type", String)
], CreateBusinessDto.prototype, "password", void 0);
//# sourceMappingURL=create-business.dto.js.map