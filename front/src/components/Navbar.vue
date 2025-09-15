<template>
  <nav class="navbar">
    <router-link to="/" class="logo-link">
      <img src="/logo.svg" alt="logo" class="logo">
    </router-link>
    </nav>
</template>

<script setup lang="ts">
// 因為 logo.svg 是 public 資料夾下的靜態資源，
// Vue/Vite 會直接處理，不需要在 script 中 import 或使用 ref。
</script>

<style scoped>
.navbar {
  /* 這是 Navbar 的容器，可以設定高度和背景 */
  height: 80px; /* 假設 Navbar 高度為 80px */
  position: fixed; /* 固定在頂部 */
  top: 0;
  left: 0;
  width: 100%; /* 佔據整個寬度 */
  z-index: 1000; /* 確保 Navbar 總是在最上層 */
  display: flex; /* 使用 flex 佈局，方便排列表 logo 和其他導航連結 */
  align-items: center; /* 垂直居中內容 */
  padding: 0 20px; /* 左右留白 */
  box-sizing: border-box;
}

.logo-link {
  /* router-link 作為 logo 的容器 */
  display: block;
  /* position: fixed; top: 10px; left: 10px; z-index: 1000;  這些屬性已經移到 .navbar 了，因為 logo-link 現在是 Navbar 的一部分 */
  margin-right: auto; /* 將 logo 推到左側，如果 Navbar 中還有其他元素，它們會被推到右側 */
}

.logo {
  width: 40px; /* 設定您想要的寬度 */
  height: 60px; /* 設定您想要的高度 */
  display: block; /* 確保 img 元素可以正確應用尺寸 */
}

/* 以下是 Navbar 中其他導航連結的樣式，如果有的話 */
.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex; /* 讓連結水平排列 */
}

.nav-links li {
  margin-left: 20px; /* 連結之間的間距 */
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
</style>