<script setup>
import { ref } from 'vue'
 
const props = defineProps({

})
 
</script>
 
<template>
    <div class="bg-indigo-50 flex flex-col column justify-center items-center h-screen">
        <slot/>
    </div>
</template>
 
<style scoped>
 
</style>