import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // 清空舊資料
  await prisma.vpottery.deleteMany();
  await prisma.user.deleteMany();

  // 建立使用者
  const hashedPassword = await bcrypt.hash("123456", 10);

  const user = await prisma.user.create({
    data: {
      email: "haidee@gmail.com",
      name: "Haidee",
      password: hashedPassword,
    },
  });

  // 建立作品
  await prisma.vpottery.createMany({
    data: [
      {
        name: "Blue Vase",
        description: "Handcrafted ceramic vase",
        imageUrl: "https://example.com/vase.jpg"
      },
      {
        name: "Clay Bowl",
        description: "Minimalist bowl",
        imageUrl: "https://example.com/bowl.jpg"
      },
    ],
  });

  console.log("✅ Seed finished!");
}

main()
  .catch((e) => {
    console.error("❌ Error in seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
