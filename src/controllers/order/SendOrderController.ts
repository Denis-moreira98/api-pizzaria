import { Request, Response } from "express";
import { SendOrderService } from "../../service/order/SendOrderService";

class SendOrderController {
   async handle(req: Request, res: Response) {
      const { order_id } = req.body;

      const sendOrderService = new SendOrderService();
      const sendOrder = await sendOrderService.execute({
         order_id,
      });

      return res.status(200).json(sendOrder);
   }
}

export { SendOrderController };
