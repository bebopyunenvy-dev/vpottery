<template>
  <div class="fixed left-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full">
    <div class="flex flex-col items-center space-y-3">
      <!-- 切換按鈕：始終可見 -->
      <button
        @click="isCollapsed = !isCollapsed"
        class="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-300"
        :aria-expanded="!isCollapsed"
      >
        <svg class="w-5 h-5 text-gray-700 transition-transform duration-300" :class="{ 'rotate-180': !isCollapsed }" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- 三個功能按鈕：收折 -->
      <div class="flex flex-col items-center space-y-3 transition-all duration-300"
           :class="isCollapsed ? 'opacity-0 scale-150 pointer-events-none' : 'opacity-100 scale-100'">

        <router-link to="/" :class="btnCls(isActive('/'))" title="Home">
          <svg class="w-5 h-5" :class="isActive('/Home') ? 'text-white' : 'text-gray-700'" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </router-link>

        <router-link to="/contact" :class="btnCls(isActive('/contact'))" title="聯絡我">
          <svg class="w-5 h-5" :class="isActive('/contact') ? 'text-white' : 'text-gray-700'" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </router-link>

        <router-link to="/artwork" :class="btnCls(isActive('/artwork'))" title="作品集">
          <svg class="w-5 h-5" :class="isActive('/artwork') ? 'text-white' : 'text-gray-700'" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const isCollapsed = ref(false)
const route = useRoute()

const btnBase =
  'w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-200 hover:scale-110'
const btnCls = (active: boolean) => [btnBase, active && 'bg-gray-900 text-white']
const isActive = (path: string) => route.path === path
</script>
