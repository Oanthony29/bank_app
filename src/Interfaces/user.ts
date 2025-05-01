import { Optional, Model } from "sequelize"; 

export interface IUser {
    id: string;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    isEmailVerified: string;
    accountStatus: string;
    createdAt: string;
    updatedAt: string;
}

export interface IUserCreationBody extends Optional<IUser, "id" | "createdAt" | "updatedAt" > {}

export interface IuserModel extends Model<IUser, IUserCreationBody>, IUser {}
