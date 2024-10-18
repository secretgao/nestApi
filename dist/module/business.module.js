"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const business_service_1 = require("../service/business.service");
const business_controller_1 = require("../backend/business.controller");
const business_entity_1 = require("../entity/business.entity");
const admin_user_entity_1 = require("../entity/admin-user.entity");
let BusinessModule = class BusinessModule {
};
exports.BusinessModule = BusinessModule;
exports.BusinessModule = BusinessModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([business_entity_1.Business, admin_user_entity_1.AdminUser])],
        providers: [business_service_1.BusinessService],
        controllers: [business_controller_1.BusinessController],
    })
], BusinessModule);
//# sourceMappingURL=business.module.js.map