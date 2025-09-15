<!-- src/views/Home.vue -->
<template>
  <div class="min-h-screen">
    
    <section class="py-20 text-center">
      <h1 class="text-4xl md:text-5xl font-extralight text-neutral-900 mb-6 tracking-tight">
        Pottery Art
      </h1>
      
      <p class="text-3 text-neutral-500 font-light max-w-2xl mx-auto mb-10">
        感受泥土與火焰的藝術
      </p>
      <RouterLink
        to="/artwork"
        class="inline-block px-6 py-3 rounded-full bg-neutral-400 text-white  hover:bg-neutral-500 transition"
      >
        See it
      </RouterLink>
    </section>

    <!-- 關於 - -->
    <section class="px-6 py-16 bg-white border-t border-neutral-200">
      <div class="max-w-7xl font-light mx-auto grid gap-10 items-center">
        <div>
          <h2 class="text-4xl font-light text-center text-neutral-900 mb-4">About</h2>
          <p class="text-neutral-600 leading-relaxed text-center max-w-3xl mx-auto">
            用最純粹的方式探索生活中的呼吸與重量
          </p>
        </div>
        <div class="aspect-video rounded-sm overflow-hidden">
          <div class="w-full h-full relative" ref="carousel">
            <transition-group name="fade" tag="div" class="w-full h-full">
              <img
                v-for="(image, index) in images"
                :key="index"
                :src="image.src"
                :alt="image.alt"
                class="w-full h-full object-cover absolute top-0 left-0"
                v-show="currentIndex === index"
              />
            </transition-group>
          </div>
        </div>
      </div>
    </section>

    <!-- 底部裝飾 -->
    <section class="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div class="text-center">
        <div class="w-16 h-16 mx-auto mb-8 border-2 border-neutral-300 rounded-full spin-20">
          <div class="w-full h-full bg-neutral-100 rounded-full flex items-center justify-center">
            <div class="w-2 h-2 bg-neutral-400 rounded-full">
              
            </div>
          </div>
        </div>
        <p class="text-neutral-400 font-light tracking-wide">手作 · 自然 · 永恆</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// 圖片資料
const images = ref([
  { src: 'src/assets/1.png', alt: '陶1'  },
  { src: 'src/assets/2.png', alt: '陶2' }
])

const currentIndex = ref(0)
const carousel = ref(null)
let intervalId: number | NodeJS.Timeout | null = null // 調整類型定義

// 自動輪播邏輯
const startCarousel = () => {
  if (intervalId !== null) {
    clearInterval(intervalId)
  }
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length
  }, 3000)
}

const stopCarousel = () => {
  if (intervalId !== null) {
    clearInterval(intervalId)
    intervalId = null
  }
}

// 生命周期鉤子
onMounted(() => {
  startCarousel()
})

onUnmounted(() => {
  stopCarousel()
})
</script>

<style scoped>
@keyframes spin20 { 
  to { transform: rotate(360deg); } 
}

.spin-20 { 
  animation: spin20 20s linear infinite; 
}

/* 淡入淡出過渡效果 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 2.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>