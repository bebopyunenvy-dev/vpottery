<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/artwork">Artwork</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
// 無需寫額外邏輯，使用 router-link 自動控制跳轉
</script>

<style scoped>
nav {
  
  color: white;
  padding: 1rem;
}
ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}
a {
  color: white;
  text-decoration: none;
}
a.router-link-exact-active {
  font-weight: bold;
  border-bottom: 2px solid white;
}
</style>