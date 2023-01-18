<script setup>

import PillCard from './PillCard.vue'
 
const props = defineProps({
    matches: { type: Number, required: true},
    flips: { type: Number, required: true},
    misses: { type: Number, required: true},
})
 
</script>
 
<template>
    <div class="bg-indigo-200 rounded-lg border border-gray-400 m-4 mt-3 p-2 pt-0 flex flex-col">
        <p class="text-lg font-sans font-light select-none">Score board</p>
        <div class="flex flex-row">
            <pill-card bg_color="bg-indigo-400">
                <p>🎯 Matches: {{ props.matches }}</p>
            </pill-card>

            <pill-card bg_color="bg-indigo-400">
                <p>🔄 Flips: {{ props.flips }}</p>
            </pill-card>

            <pill-card bg_color="bg-indigo-400">
                <p>🚫 Misses: {{ props.misses }}</p>
            </pill-card>

            <pill-card v-if="props.testMessage" bg_color="bg-indigo-400">
                <p>Msg: {{ props.testMessage }}</p>
            </pill-card>
        </div> 
    </div>
</template>
 
<style scoped>
 
</style>