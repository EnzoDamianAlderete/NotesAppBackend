import express from 'express';
import sequelize from './db.js';
import NotesRouter from './routes/notes.routes.js';
import UserRouter from './routes/user.routes.js';
import cors from "cors";

const app = express();

const PORT = 3500;

//middlewares
app.use(cors());
app.use(express.json());
app.use(UserRouter);
app.use(NotesRouter);


async function main(){
    try {
        await sequelize.sync();
        console.log('Conexion a db exitosa')
        app.listen(PORT,()=>{
            console.log(`funcionando en puerto ${PORT}`);
        });
    } catch (error) {
        console.error('Error al conectar db', error);
    }
}

main();

