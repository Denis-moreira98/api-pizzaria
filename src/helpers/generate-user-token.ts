import { sign } from "jsonwebtoken";

interface User {
   id: string;
   name: string;
   email: string;
}

export function generateToken(user: User): string {
   const token = sign(
      {
         name: user.name,
         email: user.email,
      },
      process.env.JWT_SECRET as string,
      {
         subject: user.id,
         expiresIn: "15d",
      }
   );
   return token;
}
