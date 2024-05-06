import prismaClient from "../../prisma";

class ListCategoryService {
   async execute() {
      const category = await prismaClient.category.findMany({
         select: {
            id: true,
            name: true,
            products: true,
         },
         orderBy: {
            created_at: "desc",
         },
      });

      return category;
   }
}

export { ListCategoryService };
