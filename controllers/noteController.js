import NoteModel from "../models/NoteModel.js";

export const getAllNotes = async(req,res)=>{
    try {
        const notes = await NoteModel.findAll();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getNote = async(req,res)=>{
    try {
        const note = await NoteModel.findOne({
            where:{
            id:req.params.id
        }});
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const createNote = async(req,res)=>{
    try {
        const note = await NoteModel.create(req.body);
        res.status(200).json(note);
        
    } catch (error) {
        res.status(500).json(error);
    }
}


export const deleteNote =async(req,res)=>{
    try {
        const note = await NoteModel.destroy({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json({"msg":"Nota eliminada", note});
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updateNote =async(req,res)=>{
    try {
        const {id} = req.params;
        const note = await NoteModel.findOne({
            where:{id},
        })
        note.set(req.body);
        await note.save();
        res.status(200).json({"msg":"Nota editada", note});
        
    } catch (error) {
        res.status(500).json(error)
    }
}