import prismaClient from "../../prisma";

interface CategoryRequest {
   category_id: string;
}

class RemoveCategoryService {
   async execute({ category_id }: CategoryRequest) {
      // verifica se existe produtos associados a esta categoria
      const categoryWithProducts = await prismaClient.category.findUnique({
         where: {
            id: category_id,
         },
         include: {
            products: true,
         },
      });

      // verifica se a categoria não existe ou se tem produtos associados
      if (!categoryWithProducts || categoryWithProducts.products.length > 0) {
         throw new Error(
            "This category cannot be deleted because there are products associated with it"
         );
      }

      const category = await prismaClient.category.delete({
         where: {
            id: category_id,
         },
         select: {
            id: true,
            name: true,
         },
      });

      return category;
   }
}

export { RemoveCategoryService };
