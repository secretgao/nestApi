"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'shop',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map