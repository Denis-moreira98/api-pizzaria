import { Request, Response } from "express";
import { RemoveProductService } from "../../service/product/RemoveProductService";

class RemoveProductController {
   async handle(req: Request, res: Response) {
      const product_id = req.query.product_id as string;

      const removeProductService = new RemoveProductService();
      const product = removeProductService.execute({
         product_id,
      });

      return res
         .status(200)
         .json({ message: "Product deleted successfully", product });
   }
}

export { RemoveProductController };
