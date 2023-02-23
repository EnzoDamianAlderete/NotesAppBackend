import { Router } from "express";
import { getAllNotes , createNote, deleteNote} from "../controllers/noteController.js";

const NotesRouter = Router();

NotesRouter.get("/notes",getAllNotes);
NotesRouter.post("/notes",createNote);
NotesRouter.delete("/notes/:id",deleteNote);

export default NotesRouter;