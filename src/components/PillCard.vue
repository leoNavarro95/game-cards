<script setup>
import { computed, ref } from 'vue'
 
const props = defineProps({
    bg_color: {type: String, default: "bg-blue-900"},
    text_color: {type: String, default: "text-white"},
})
 
const classPillCard = computed(()=>{
    return props.bg_color + ' ' + props.text_color
})
</script>
 
<template>
    <div class="text-left select-none text-sm rounded-lg p-0.5 m-2"
        :class="classPillCard"
    >
        <slot></slot>
    </div>
</template>
 
<style scoped>
 
</style>