import { Request, Response } from "express";
import { ListProductService } from "../../service/product/ListProductService";

class ListProductControler {
   async handle(req: Request, res: Response) {
      const listProductService = new ListProductService();

      const products = await listProductService.execute();

      return res.status(200).json(products);
   }
}

export { ListProductControler };
