import { Response, Request } from "express";
import { DetailUserService } from "../../service/user/DetailUserService";

class DetailUserController {
   async handle(req: Request, res: Response) {
      const user_id = req.user_id;

      const detailUserService = new DetailUserService();

      const user = await detailUserService.execute(user_id);

      return res.status(200).json(user);
   }
}

export { DetailUserController };
