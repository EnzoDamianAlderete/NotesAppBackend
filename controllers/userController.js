import NoteModel from "../models/NoteModel.js";
import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const getAllUsers = async(req,res)=>{
    try {
        const users = await UserModel.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json(error);
    }
    
}

export const getUser = async(req,res)=>{
    const {id} = req.user; 

    UserModel.findOne({where:{id}}).then((user)=>{
        if(!user){
            return res.json({
                mensaje: " No se ha encontrado usuario con ese ID"
            });
        }else{
            const {...dataUser} = user.dataValues;
            res.json({dataUser});
        }
    });
}

export const createUser = async( req, res)=>{
    const {name ,userName , email, password} = req.body;

    UserModel.findOne({where:{email}}).then((user)=>{
        if(user){
            return res.json({mensaje:"Ya existe un usuario con este correo"});
        }else if(!name ||!userName|| !email||!password){
            return res.json({ mensaje:"falta completar un campo"});
        }else{
            bcrypt.hash(password,10,(error,passwordHashed)=>{
                if(error) res.json({error});
                else{
                    const newUser = new UserModel({
                        name,
                        userName, 
                        email, 
                        password:passwordHashed,
                    });

                    newUser.save().then((user)=>{
                        res.json({mensaje:"Usuario creado correctamente", user});
                    })
                    .catch((error)=> console.error(error));
                }
            });
        }
    });
};

export const login = async (req,res)=>{
    const {email, password } =req.body;

     UserModel.findOne({where:{email}}).then((user)=>{
        if(!user){
            return res.json({ mensaje:"El usuario no existe"});
        }

        bcrypt.compare(password, user.password).then((esCorrecta)=>{
            if(esCorrecta){
                const { id , name } = user;

                const data = {
                    id,
                    name,
                };

                const token = jwt.sign(data,"secreto",{ expiresIn:864000,});

                res.json({
                    mensaje:"Usuario logeado correctamente", user:{
                        id,
                        name,
                        token,
                    },
                });
            }else{
                return res.json({
                    mensaje:"Pass incorrecta",
                    status: esCorrecta
                });
            }
        });
    });
};

export const updateUser = async( req,res)=>{
    try {
        const user = await UserModel.update(req.body,{
            where:{
                id:req.params.id
            }
        })
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteUser = async( req,res)=>{
    try {
        const user = await UserModel.destroy({
            where:{
                id:req.params.id
            }
        })

        res.status(200).json({"msg":"Usuario eliminado" , user});
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getNotesUser =  async(req,res)=>{
    try {
        const notes = await NoteModel.findAll({
            where:{
                UserId:req.params.id,
            }
        });
        res.json({notes});
    } catch (error) {
        res.status(500).json(error);
    }
} 