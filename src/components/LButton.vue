<script setup>
 
 const emit = defineEmits(['click'])
 
</script>
 
<template>
    <button 
        @click="emit('click')"
        class="m-2 rounded-3xl bg-blue-400 bg-opacity-25 px-5 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-blue-600 active:bg-blue-900">

        <slot></slot>

    </button>
</template>
 