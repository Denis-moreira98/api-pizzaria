import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

// Middleware
import { isAuthenticated } from "./middlewares/isAuthenticated";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

//Multer
import uploadConfig from "./config/multer";

import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByProductController } from "./controllers/product/ListByProductController";

import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

// -- ROTAS USER --
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);

// -- ROTAS CATEGORY --
router.post(
   "/category",
   isAuthenticated,
   new CreateCategoryController().handle
);
router.get("/category", isAuthenticated, new ListCategoryController().handle);

// -- ROTAS PRODUCT --
router.post(
   "/product",
   isAuthenticated,
   upload.single("file"),
   new CreateProductController().handle
);
router.get(
   "/category/product",
   isAuthenticated,
   new ListByProductController().handle
);

// -- ROTAS PRODUCT --
router.post("/order", isAuthenticated, new CreateOrderController().handle);
router.delete("/order", isAuthenticated, new RemoveOrderController().handle);

export { router };
