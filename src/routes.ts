import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

// Middleware
import { isAuthenticated } from "./middlewares/isAuthenticated";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { RemoveCategoryController } from "./controllers/category/RemoveCategoryController";

//Multer
import uploadConfig from "./config/multer";

import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByProductController } from "./controllers/product/ListByProductController";
import { RemoveProductController } from "./controllers/product/RemoveProductController";
import { EditProductController } from "./controllers/product/EditProductController";

import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrdersController } from "./controllers/order/ListOrdersController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";
import { ListProductControler } from "./controllers/product/ListProductController";

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
router.delete(
   "/category",
   isAuthenticated,
   new RemoveCategoryController().handle
);

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
router.delete(
   "/product",
   isAuthenticated,
   new RemoveProductController().handle
);
router.patch(
   "/product/edit",
   isAuthenticated,
   upload.single("file"),
   new EditProductController().handle
);
router.get("/products", isAuthenticated, new ListProductControler().handle);

// -- ROTAS ORDER --
router.post("/order", isAuthenticated, new CreateOrderController().handle);
router.delete("/order", isAuthenticated, new RemoveOrderController().handle);
router.post("/order/add", isAuthenticated, new AddItemController().handle);
router.delete(
   "/order/remove",
   isAuthenticated,
   new RemoveItemController().handle
);
router.put("/order/send", isAuthenticated, new SendOrderController().handle);
router.get("/orders", isAuthenticated, new ListOrdersController().handle);
router.get(
   "/orders/detail",
   isAuthenticated,
   new DetailOrderController().handle
);
router.put(
   "/order/finish",
   isAuthenticated,
   new FinishOrderController().handle
);

export { router };
