import { Business } from './business.entity';
export declare class AdminUser {
    id: number;
    username: string;
    password: string;
    isSuper: number;
    createdAt: Date;
    updatedAt: Date;
    business: Business;
}
