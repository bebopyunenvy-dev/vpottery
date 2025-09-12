<template>
  <div class="min-h-screen bg-gray-100 flex">
<Sidebar />
<router-view class="flex-1 p-8" />
  </div>
</template>
<script setup lang="ts">
import Sidebar from "../src/components/Sidebar.vue"

</script>

<style scoped>
</style>