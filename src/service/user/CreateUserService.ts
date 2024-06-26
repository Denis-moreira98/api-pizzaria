import prismaClient from "../../prisma";
import { hash } from "bcryptjs";
import { generateToken } from "../../helpers/generate-user-token";

interface UserRequest {
   name: string;
   email: string;
   password: string;
}

class CreateUserService {
   async execute({ name, email, password }: UserRequest) {
      //Verificar se enviou um email
      if (!email) {
         throw new Error("Email incorrect");
      }
      // verificar se esse email já está cadastrado
      const userAlreadyExists = await prismaClient.user.findFirst({
         where: { email: email },
      });

      if (userAlreadyExists) {
         throw new Error("User email already exists");
      }

      // Criptografar senha
      const passwordHash = await hash(password, 8);

      const user = await prismaClient.user.create({
         data: {
            name: name,
            email: email,
            password: passwordHash,
         },
         select: {
            id: true,
            name: true,
            email: true,
         },
      });

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

export { CreateUserService };
