<script setup>
import { ref } from 'vue'
 
const props = defineProps({

})
 
</script>
 
<template>
<div class="h-full w-full absolute top-0 left-0 bg-gray-800 bg-opacity-25 shadow-lg backdrop-blur-md">
  <div class="flex justify-center items-center px-16 py-10 max-sm:px-8">
    <div class="text-white rounded-xl border border-white p-4 md:p-16">

      <div class="mb-8 flex flex-col items-center">
        <img src="../assets/Pokemon-Logo.png" width="200" alt="" srcset="" />
        <h1 class="mb-2 text-2xl">You won! 🎉</h1>
        <span class="text-gray-300">You have matched the 6 couples of cards</span>
      </div>

      <div class="mt-8 flex flex-col items-center text-lg">
          <button class="m-2 rounded-3xl bg-blue-400 bg-opacity-25 px-5 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-blue-600 active:bg-blue-900">
            🔁 Play again 
          </button>

          <button class="m-2 rounded-3xl bg-blue-400 bg-opacity-25 px-5 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-blue-600 active:bg-blue-900">
            🔗 Share 
          </button>

      </div>

    </div>
  </div>
</div>
</template>
