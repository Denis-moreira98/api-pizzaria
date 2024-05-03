import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { generateToken } from "../../helpers/generate-user-token";

interface AuthRequest {
   email: string;
   password: string;
}

class AuthUserService {
   async execute({ email, password }: AuthRequest) {
      //verificar se o email existe
      const user = await prismaClient.user.findFirst({
         where: {
            email: email,
         },
      });
      if (!user) {
         throw new Error("email incorrect");
      }
      // Verificar se a senha está correta
      const passwordMatch = await compare(password, user.password);

      if (!passwordMatch) {
         throw new Error("password incorrect");
      }

      // Se deu tudo certo, gerar o token do usuário
      const token = generateToken(user);

      return {
         id: user.id,
         name: user.name,
         email: user.email,
         token: token,
      };
   }
}

export { AuthUserService };
