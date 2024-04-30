import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserControllers";

const router = Router();

// -- ROTAS USER --
router.post("/users", new CreateUserController().handle);

export { router };
