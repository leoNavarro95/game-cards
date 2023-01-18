<script setup>
import { ref } from 'vue'

const props = defineProps({
    title: {type: String, default: "Card title here"}
})
 
</script>
 
<template>

<div class="w-60 px-3 m-3 flex flex-col items-start justify-start bg-blue-400 rounded-md border border-gray-300 shadow-lg shadow-gray-800">
    <div class="text-xl pt-1 border-b border-gray-300">
        {{ props.title }}
    </div>

    <slot></slot>
</div>

</template>
 