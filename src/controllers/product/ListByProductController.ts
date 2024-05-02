import { Response, Request } from "express";
import { ListByCategoryService } from "../../service/product/ListByCategoryService";

class ListByProductController {
   async handle(req: Request, res: Response) {
      const category_id = req.query.category_id as string;

      const listByCategory = new ListByCategoryService();
      const listProducts = await listByCategory.execute({
         category_id,
      });

      return res.status(200).json(listProducts);
   }
}

export { ListByProductController };
