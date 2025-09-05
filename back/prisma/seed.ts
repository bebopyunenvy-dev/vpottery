import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.pottery.createMany({
    data: [
      {
        name: "Blue Vase",
        description: "Handcrafted ceramic vase",
        imageUrl: "https://example.com/vase.jpg",
      },
      {
        name: "Clay Bowl",
        description: "Minimalist bowl",
        imageUrl: "https://example.com/bowl.jpg",
      },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
