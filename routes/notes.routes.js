import { Router } from "express";
import { getAllNotes , createNote, deleteNote, updateNote, getNote} from "../controllers/noteController.js";

const NotesRouter = Router();

NotesRouter.get("/notes",getAllNotes);
NotesRouter.get("/notes/:id",getNote);
NotesRouter.post("/notes",createNote);
NotesRouter.put("/notes/:id",updateNote);
NotesRouter.delete("/notes/:id",deleteNote);

export default NotesRouter;