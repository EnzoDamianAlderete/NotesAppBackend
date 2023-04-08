import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv'
dotenv.config()

const DB_NAME = process.env.DB_NAME;
const USER_NAME = process.env.USER_NAME;
const PASSWORD_DB = process.env.PASSWORD_DB;
const HOST = process.env.HOST;
const DIALECT = process.env.DIALECT;

const sequelize = new Sequelize(DB_NAME,USER_NAME,PASSWORD_DB, {
    host:HOST,
    dialect:DIALECT,
});


export default sequelize;