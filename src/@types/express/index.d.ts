import { Request } from "express";
import multer from "multer";

declare global {
   namespace Express {
      interface Request {
         user_id: string; // Adicionando a definição para variavel user_id
         file: multer.File; // Adicionando a definição de tipo para o arquivo de upload
      }
   }
}
