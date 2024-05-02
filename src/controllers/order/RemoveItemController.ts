import { Request, Response } from "express";
import { RemoveItemService } from "../../service/order/RemoveItemService";

class RemoveItemController {
   async handle(req: Request, res: Response) {
      const item_id = req.query.item_id as string;

      const removeItemService = new RemoveItemService();
      const order = await removeItemService.execute({
         item_id,
      });

      return res
         .status(200)
         .json({ message: "order deleted successfully", order });
   }
}

export { RemoveItemController };
