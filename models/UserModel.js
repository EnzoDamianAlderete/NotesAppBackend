import sequelize from "../db.js";
import { DataTypes } from "sequelize";
import  NoteModel  from "./NoteModel.js";

const UserModel = sequelize.define('User',{
    id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false,
        len: [3,50],
    },
    userName:{
        type:DataTypes.STRING,
        allowNull:false,
        len: [3,30],
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        isEmail: true,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

UserModel.hasMany(NoteModel);
NoteModel.belongsTo(UserModel);

export default UserModel;