import { Request, Response } from "express";
import { CreateOrderService } from "../../service/order/CreateOrderService";

class CreateOrderController {
   async handle(req: Request, res: Response) {
      const { table, name } = req.body;

      const createOrder = new CreateOrderService();
      const order = await createOrder.execute({
         table,
         name,
      });

      return res.status(200).json(order);
   }
}

export { CreateOrderController };