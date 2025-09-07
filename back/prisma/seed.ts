import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  console.log("   - Deleting old data...");
  await prisma.vpottery.deleteMany();
  await prisma.user.deleteMany();

  console.log("   - Creating users...");

  const passwordHaidee1 = await bcrypt.hash("123456", 10);

  const passwordBella = await bcrypt.hash("password_for_bella", 10); // 為 Bella 使用者加密密碼
  // 使用 createMany 一次性建立多個使用者
  await prisma.user.createMany({
    data: [
      {
        email: "haidee@gmail.com", // 原有的使用者
        name: "Haidee",
        password: passwordHaidee1,
      },
      // highlight-start
      {
        email: "bella@example.com", // 新增的使用者
        name: "Bella", // 可以給一個不同的名字
        password: passwordBella,
      },
      // highlight-end
    ],
  });
  console.log("   - Users created!");

  // 3. 建立作品資料
  console.log("   - Creating pottery items...");
  await prisma.vpottery.createMany({
    data: [
      // --- 原有的商品 ---
      {
        name: "Blue Vase",
        description: "A deep blue vase, perfect for a single flower.",
        imageUrl:
          "https://images.unsplash.com/photo-1578749593739-352115a716fe?q=80&w=1974&auto=format&fit=crop", // 換成真實圖片
      },
      {
        name: "Clay Bowl",
        description: "Minimalist bowl, ideal for serving or decoration.",
        imageUrl:
          "https://images.unsplash.com/photo-1610932994534-8243434b0d5e?q=80&w=2127&auto=format&fit=crop", // 換成真實圖片
      },
      // --- 新增的商品 ---
      // highlight-start
      {
        name: "White Plate",
        description: "Simple and elegant white porcelain plate.",
        imageUrl:
          "https://images.unsplash.com/photo-1565685439337-36882a9a5a33?q=80&w=1974&auto=format&fit=crop", // 換成真實圖片
      },
      {
        name: "Ceramic Mug Set",
        description:
          "A set of two handcrafted mugs, perfect for your morning coffee.",
        imageUrl:
          "https://images.unsplash.com/photo-1594312249185-2c5ev3c0763f?q=80&w=1974&auto=format&fit=crop", // 換成真實圖片
      },
      {
        name: "Terracotta Pot",
        description: "Classic terracotta pot for your favorite plants.",
        imageUrl:
          "https://images.unsplash.com/photo-1599139428312-e52d367873a9?q=80&w=1974&auto=format&fit=crop", // 換成真實圖片
      },
      // highlight-end
    ],
  });
  console.log("   - Pottery items created!");

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
