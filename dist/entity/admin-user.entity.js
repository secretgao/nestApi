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
exports.AdminUser = void 0;
const typeorm_1 = require("typeorm");
const business_entity_1 = require("./business.entity");
let AdminUser = class AdminUser {
};
exports.AdminUser = AdminUser;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ unsigned: true }),
    __metadata("design:type", Number)
], AdminUser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], AdminUser.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 40, nullable: true }),
    __metadata("design:type", String)
], AdminUser.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', unsigned: true, default: 0 }),
    __metadata("design:type", Number)
], AdminUser.prototype, "isSuper", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)' }),
    __metadata("design:type", Date)
], AdminUser.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' }),
    __metadata("design:type", Date)
], AdminUser.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => business_entity_1.Business, business => business.adminUser),
    __metadata("design:type", business_entity_1.Business)
], AdminUser.prototype, "business", void 0);
exports.AdminUser = AdminUser = __decorate([
    (0, typeorm_1.Entity)('admin_users')
], AdminUser);
//# sourceMappingURL=admin-user.entity.js.map