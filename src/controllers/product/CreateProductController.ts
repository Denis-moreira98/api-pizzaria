import { Request, Response } from "express";
import { CreateProductService } from "../../service/product/CreateProductService";

class CreateProductController {
   async handle(req: Request, res: Response) {
      const { name, price, description, category_id } = req.body;

      const createProductService = new CreateProductService();

      if (!req.file) {
         throw new Error("error upload file required");
      } else {
         const { filename: banner } = req.file;

         const product = await createProductService.execute({
            name,
            price,
            description,
            banner,
            category_id,
         });
         return res.status(201).json(product);
      }
   }
}
export { CreateProductController };
