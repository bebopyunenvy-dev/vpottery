<template>
  <div>
    <Navbar /> <Sidebar />
    <main>
      <router-view />
    </main>
  </div>
</template>


<script setup lang="ts">

import Navbar from './components/Navbar.vue'; // 請確保路徑正確
import Sidebar from './components/Sidebar.vue'; // 請確保路徑正確

</script>

<style>

main {
  /* 這是為了讓內容不被 Navbar 和 Sidebar 遮擋 */
  padding-top: 80px; /* 根據你的 Navbar 高度調整 */
  padding-left: 80px; /* 根據你的 Sidebar 寬度調整，例p如 80px */
  padding-bottom: 20px; /* 底部留白 */
  padding-right: 20px; /* 右側留白 */
  box-sizing: border-box; /* 包含 padding 在 width 內 */
}

/* 讓 body 移除預設 margin，並設置背景 */
body {
  
  margin: 0 ;
  font-family: sans-serif; /* 範例字體 */
  
}

/* 確保 Sidebar 和 Navbar 的 z-index 足夠高，讓它們在內容之上 */
/* 你的 Sidebar 元件中已有 z-50，Navbar 的 z-index 設為 1000 */
</style>