import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ------------------------
  // 先清空舊資料
  // ------------------------
  await prisma.vpottery.deleteMany();
  await prisma.user.deleteMany();

  // ------------------------
  // 新增單一 User
  // ------------------------
  await prisma.user.create({
    data: {
      email: "haidee@gmail.com",
      name: "Haidee",
      password: "123456", // 建議之後加密
    },
  });

  // ------------------------
  // 新增 vpottery 資料
  // ------------------------
  await prisma.vpottery.createMany({
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

  console.log("Seed finished!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
