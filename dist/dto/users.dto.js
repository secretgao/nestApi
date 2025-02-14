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
exports.CreateUsersDto = void 0;
const class_validator_1 = require("class-validator");
class CreateUsersDto {
}
exports.CreateUsersDto = CreateUsersDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '帐号不能为空' }),
    (0, class_validator_1.IsString)({ message: '帐号必须是字符串' }),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '密码不能为空' }),
    (0, class_validator_1.IsString)({ message: '密码必须是字符串' }),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '头像不能为空' }),
    (0, class_validator_1.IsString)({ message: '头像必须是字符串' }),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "headImg", void 0);
//# sourceMappingURL=users.dto.js.map