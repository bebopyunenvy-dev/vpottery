<template>
  <div class="fixed left-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full">
    <div class="flex flex-col items-center space-y-3">
      <!-- 切換按鈕：始終可見 -->
      <button
        @click="isCollapsed = !isCollapsed"
        class="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-300"
        :aria-expanded="!isCollapsed"
      >
        <svg class="w-5 h-5 text-gray-700 transition-transform duration-300" :class="{ 'rotate-180': !isCollapsed }" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- 三個功能按鈕：收折 -->
      <div class="flex flex-col items-center space-y-3 transition-all duration-100"
           :class="isCollapsed ? 'opacity-0 scale-150 pointer-events-none' : 'opacity-100 scale-100'">

        <router-link to="/" :class="btnCls(isActive('/'))" title="Home">
          <svg xmlns="http://www.w3.org/2000/svg" :class="isActive('/') ? 'text-white' : 'text-gray-700 w-5 h-5 '" viewBox="0 0 24 24 " fill="" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
              d="M12.5812 2.68627C12.2335 2.43791 11.7664 2.43791 11.4187 2.68627L1.9187 9.47198L3.08118 11.0994L11.9999 4.7289L20.9187 11.0994L22.0812 9.47198L12.5812 2.68627ZM19.5812 12.6863L12.5812 7.68627C12.2335 7.43791 11.7664 7.43791 11.4187 7.68627L4.4187 12.6863C4.15591 12.874 3.99994 13.177 3.99994 13.5V20C3.99994 20.5523 4.44765 21 4.99994 21H18.9999C19.5522 21 19.9999 20.5523 19.9999 20V13.5C19.9999 13.177 19.844 12.874 19.5812 12.6863ZM5.99994 19V14.0146L11.9999 9.7289L17.9999 14.0146V19H5.99994Z" />
          </svg>


        </router-link>

        <router-link to="/contact" :class="btnCls(isActive('/contact'))" title="Contact">
          <svg xmlns="http://www.w3.org/2000/svg" :class="isActive('/contact') ? 'text-white' : 'text-gray-700 w-5 h-5'" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
              d="M20.7134 8.12811L20.4668 8.69379C20.2864 9.10792 19.7136 9.10792 19.5331 8.69379L19.2866 8.12811C18.8471 7.11947 18.0555 6.31641 17.0677 5.87708L16.308 5.53922C15.8973 5.35653 15.8973 4.75881 16.308 4.57612L17.0252 4.25714C18.0384 3.80651 18.8442 2.97373 19.2761 1.93083L19.5293 1.31953C19.7058 0.893489 20.2942 0.893489 20.4706 1.31953L20.7238 1.93083C21.1558 2.97373 21.9616 3.80651 22.9748 4.25714L23.6919 4.57612C24.1027 4.75881 24.1027 5.35653 23.6919 5.53922L22.9323 5.87708C21.9445 6.31641 21.1529 7.11947 20.7134 8.12811ZM2 4C2 3.44772 2.44772 3 3 3H14V5H4.5052L12 11.662L16.3981 7.75259L17.7269 9.24741L12 14.338L4 7.22684V19H20V11H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4Z" />
          </svg>

          
        </router-link>

        <router-link to="/artwork" :class="btnCls(isActive('/artwork'))" title="Art Work">
      <svg
  xmlns="http://www.w3.org/2000/svg"
  :class="isActive('/artwork') ? 'text-white' : 'text-gray-700 w-5 h-5'"
  viewBox="0 0 24 24"stroke-linejoin="round" stroke-width="1"
>
  <path d="M16 2.5C16 1.94772 15.5523 1.5 15 1.5H9C8.44772 1.5 8 1.94772 8 2.5V3.5C8 4.05228 8.44772 4.5 9 4.5H15C15.5523 4.5 16 4.05228 16 3.5V2.5Z" />

  <path d="M18 6.5C19 6.5 20 7.5 20 9.5C20 11.5 19 12.5 18 13.5H6C5 12.5 4 11.5 4 9.5C4 7.5 5 6.5 6 6.5H18Z" />

  <path d="M17.5 15.5C17.5 16.5 17 18 16 20L15.5 21C15 21.5 14.5 22.5 14 23.5H10C9.5 22.5 9 21.5 8.5 21L8 20C7 18 7 16.5 6.5 15.5H17.5Z" />
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
  'w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-200 hover:scale-90'
const btnCls = (active: boolean) => active ? `${btnBase} bg-gray-900 text-white` : btnBase;
const isActive = (name: string) => route.name === name;
</script>
