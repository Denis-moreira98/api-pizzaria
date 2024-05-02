import { Request, Response } from "express";
import { AddItemService } from "../../service/order/AddItemService";

class AddItemController {
   async handle(req: Request, res: Response) {
      const { order_id, product_id, amount } = req.body;

      const addItem = new AddItemService();
      const order = await addItem.execute({
         order_id: order_id,
         product_id: product_id,
         amount: amount,
      });

      return res.status(201).json(order);
   }
}

export { AddItemController };
