import prismaClient from "../../prisma";

interface ProductRequest {
   product_id: string;
   name?: string;
   price?: string;
   description?: string;
   banner?: string;
   category_id?: string;
}

class EditProductService {
   async execute({
      product_id,
      name,
      price,
      description,
      banner,
      category_id,
   }: ProductRequest) {
      // Verificar se o produto existe
      const existingProduct = await prismaClient.product.findUnique({
         where: {
            id: product_id,
         },
      });

      if (!existingProduct) {
         throw new Error("Product not found");
      }

      //Atualizar apenas campos fornecidos
      const updatedProduct = await prismaClient.product.update({
         where: {
            id: product_id,
         },
         data: {
            name: name || existingProduct.name,
            price: price || existingProduct.price,
            description: description || existingProduct.description,
            banner: banner || existingProduct.banner,
            category_id: category_id || existingProduct.category_id,
         },
      });

      return updatedProduct;
   }
}

export { EditProductService };
