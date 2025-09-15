<template>
  <div>
    <Navbar />
    <Sidebar />
    <router-view />  <!-- 顯示符合路由的頁面 -->
  </div>
</template>

<script setup lang ="ts">
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
</script>