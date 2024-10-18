import { AdminUser } from './admin-user.entity';
export declare class Business {
    id: number;
    sort: number;
    phone: string;
    businessName: string;
    isOpen: number;
    realName: string;
    adminUserId: number;
    createdAt: Date;
    updatedAt: Date;
    adminUser: AdminUser;
}
