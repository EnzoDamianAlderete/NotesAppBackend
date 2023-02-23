import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const NoteModel = sequelize.define('Note',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    deleted:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
    }
});

export default NoteModel;