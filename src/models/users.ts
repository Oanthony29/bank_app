import db from "../database/dbConnect";
import { IUserModel } from "../Interfaces/user";
import { DataType, DataTypes } from "sequelize";
import {v4 as uuuidv4} from "uuid";

const Users = db.define<IUserModel>( "users", {
        id:{
            type: DataTypes.UUID,
            defaultValue: () => uuuidv4 (),
            allowNull: false,
            primaryKey: true,
        },
        userName:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        firstName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        role:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        isEmailVerified:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        accountStatus:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        createdAt:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        updatedAt:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
    },{
        timestamps: true,
        tableName: 'users',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    }
);

export default Users;
