
<script setup>
import { onMounted } from 'vue'
import { pageview } from 'vue-gtag'

onMounted(() => {
  pageview("/about")
})

</script>

<template>

    <h1 class="text-2xl md:text-5xl m-3 font-bold font-serif text-gray-700">
      Developed with love by:
    </h1>

    <span class="text-left text-xl italic"> Leonardo Navarro</span>
    <a href="https://github.com/leoNavarro95/game-cards"
				target="__blank"
				class="hover:underline hover:text-indigo-600 duration-500"
    > Github profile</a>


</template>