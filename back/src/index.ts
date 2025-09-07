import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import passport from "passport";
import authRouter from "./auth";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Routes
app.use("/auth", authRouter);

app.get("/api/pottery", async (_req, res) => {
  // 用 _req 避免 TS6133
  const prisma = new PrismaClient();
  try {
    const pottery = await prisma.vpottery.findMany();
    res.json(pottery);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
});

// Server
const PORT = process.env.PORT || 3006;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
