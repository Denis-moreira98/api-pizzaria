import { Request, Response } from "express";
import { EditProductService } from "../../service/product/EditProductService";

class EditProductController {
   async handle(req: Request, res: Response) {
      const product_id = req.query.product_id as string;

      const { name, price, description } = req.body;

      let banner: string | undefined;

      if (req.file) {
         banner = req.file.filename;
      }

      const editProductService = new EditProductService();
      const updatedProduct = await editProductService.execute({
         product_id,
         name,
         price,
         description,
         banner,
      });

      return res.status(200).json(updatedProduct);
   }
}

export { EditProductController };
