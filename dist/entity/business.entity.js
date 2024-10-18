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
exports.Business = void 0;
const typeorm_1 = require("typeorm");
const admin_user_entity_1 = require("./admin-user.entity");
let Business = class Business {
};
exports.Business = Business;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ unsigned: true }),
    __metadata("design:type", Number)
], Business.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unsigned: true, nullable: true, comment: '排序', default: 0 }),
    __metadata("design:type", Number)
], Business.prototype, "sort", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, comment: '联系电话' }),
    __metadata("design:type", String)
], Business.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true, comment: '商家昵称' }),
    __metadata("design:type", String)
], Business.prototype, "businessName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', unsigned: true, default: 0, comment: '是否开启：0关闭/1开启' }),
    __metadata("design:type", Number)
], Business.prototype, "isOpen", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, comment: '真实姓名' }),
    __metadata("design:type", String)
], Business.prototype, "realName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unsigned: true, nullable: true, comment: '商家关联adminusers 后台登录' }),
    __metadata("design:type", Number)
], Business.prototype, "adminUserId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)' }),
    __metadata("design:type", Date)
], Business.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' }),
    __metadata("design:type", Date)
], Business.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => admin_user_entity_1.AdminUser, adminUser => adminUser.business),
    (0, typeorm_1.JoinColumn)({ name: 'adminUserId' }),
    __metadata("design:type", admin_user_entity_1.AdminUser)
], Business.prototype, "adminUser", void 0);
exports.Business = Business = __decorate([
    (0, typeorm_1.Entity)('business')
], Business);
//# sourceMappingURL=business.entity.js.map