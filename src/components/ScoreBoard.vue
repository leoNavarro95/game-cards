<script setup>
import { ref } from 'vue'

import PillCard from './PillCard.vue'
 
const props = defineProps({
    matches: { type: Number, required: true},
    flips: { type: Number, required: true},
    testMessage: { type: String, required: true},

})
 
</script>
 
<template>
    <div class="bg-indigo-400 m-5 p-2 flex flex-col">
        <p class="text-lg select-none">Score board:</p>
        <div class="flex flex-row">
            <pill-card>
                <p>Matches: {{ props.matches }}</p>
            </pill-card>

            <pill-card>
                <p>Flips: {{ props.flips }}</p>
            </pill-card>

            <pill-card v-if="props.testMessage">
                <p>Msg: {{ props.testMessage }}</p>
            </pill-card>
        </div> 
    </div>
</template>
 
<style scoped>
 
</style>