<script setup>
import { ref } from 'vue'
 
const props = defineProps({

})
 
</script>
 
<template>
    <div class="bg-indigo-100 flex flex-col column items-center h-full">       
        <slot/>
    </div>
</template>
 
<style scoped>
 
</style>