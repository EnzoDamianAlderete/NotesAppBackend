import { Sequelize } from "sequelize";

const sequelize = new Sequelize("NotesApp","postgres","pass", {
    host:"localhost",
    dialect:"postgres",
});


export default sequelize;