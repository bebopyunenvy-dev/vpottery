// src/index.ts

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// 中介軟體
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

// 路由
// highlight-start
app.get("/", (_req, res) => {
  res.json({
    message: "歡迎來到 vPottery API！",
    status: "運行中",
    documentation: "請參考 Postman 或相關文件來測試 API 端點。",
  });
});
// highlight-end

app.use("/api/auth", authRoutes);

// 啟動伺服器
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
