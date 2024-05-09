import prismaClient from "../../prisma";

interface ProductRequest {
   name: string;
   price: string;
   description: string;
   banner: string;
   category_id: string;
}

class CreateProductService {
   async execute({
      name,
      price,
      description,
      banner,
      category_id,
   }: ProductRequest) {
      if (!name) {
         throw new Error("name is required");
      }
      if (!price) {
         throw new Error("price is required");
      }
      if (!description) {
         throw new Error("description is required");
      }
      if (!category_id) {
         throw new Error("category is required");
      }

      const product = await prismaClient.product.create({
         data: {
            name: name,
            price: price,
            description: description,
            banner: banner,
            category_id: category_id,
         },
      });

      return product;
   }
}

export { CreateProductService };
