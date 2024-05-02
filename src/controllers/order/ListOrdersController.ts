import { Request, Response } from "express";
import { ListOrdersService } from "../../service/order/ListOrdersService";

class ListOrdersController {
   async handle(req: Request, res: Response) {
      const listOrderService = new ListOrdersService();
      const orders = await listOrderService.execute();

      return res.status(200).json(orders);
   }
}

export { ListOrdersController };
