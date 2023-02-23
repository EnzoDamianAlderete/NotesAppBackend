import { Router } from "express";
import { createUser, getAllUsers ,getUser , updateUser ,deleteUser, getNotesUser, login} from "../controllers/userController.js";
import verifyToken from "../middlewares/verifyToken.js";

const UserRouter = Router();

UserRouter.get("/users",getAllUsers);
UserRouter.post("/login",login);
UserRouter.get("/user",verifyToken,getUser);
UserRouter.post("/users",createUser);
UserRouter.put("/users/:id",updateUser);
UserRouter.delete("/users/:id",deleteUser);
UserRouter.get("/users/:id/notes",getNotesUser);

export default UserRouter;