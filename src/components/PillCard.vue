<script setup>
import { ref } from 'vue'
 
const props = defineProps({

})
 
</script>
 
<template>
    <div class="bg-blue-900 text-white text-left select-none text-sm rounded-lg p-0.5 m-2">
        <slot></slot>
    </div>
</template>
 
<style scoped>
 
</style>