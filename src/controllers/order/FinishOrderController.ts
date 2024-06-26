import { Request, Response } from "express";
import { FinishOrderService } from "../../service/order/FinishOrderService";

class FinishOrderController {
   async handle(req: Request, res: Response) {
      const { order_id } = req.body;

      const finishOrderService = new FinishOrderService();
      const order = await finishOrderService.execute({
         order_id,
      });

      return res
         .status(200)
         .json({ message: "Order finished successfully", order });
   }
}

export { FinishOrderController };
