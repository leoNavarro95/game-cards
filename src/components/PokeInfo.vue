<script setup>
import { computed, ref } from 'vue'

import { useGameStore } from '../stores/GameStore'

import CardStats from './CardStats.vue'
import PillCard from './PillCard.vue'
import { bgColorBytype } from '../util/getPokemonsInfo'

const gameStore = useGameStore()
 
const props = defineProps({
    pokemonIndex: {type: Number, required: true}
})

const getSelectedPokemon = computed(() => {
    return gameStore.getSinglePokemons[props.pokemonIndex]
})


</script>

<template>
    <div class="flex items-center md:items-start  justify-center flex-col md:flex-row border-t border-gray-400">
        <!-- Info -->
        <card-stats title="Info:">
            <!-- Stats rows -->
            <div class="text-base font-mono">
                Name: {{ getSelectedPokemon.name }} #{{ getSelectedPokemon.id }}
            </div>
    
            <div class="text-base font-mono">
                Experience: {{ getSelectedPokemon.experience }}
            </div>
    
            <div class="text-base font-mono">
                Height: {{ getSelectedPokemon.height * 10 }} cm
            </div>
    
            <div class="text-base font-mono">
                Weight: {{ getSelectedPokemon.weight/10 }} Kg
            </div>
        </card-stats>
        
        <!-- types -->
        <card-stats title="Types:">
            <div class="flex  flex-row">
                <pill-card :bg_color="bgColorBytype[type.type.name]" v-for="(type, index) in getSelectedPokemon.types" :key="index" class="text-base font-mono font-bold">
                    {{ type.type.name }}
                </pill-card>
            </div>
        </card-stats>
        <!-- Stats -->
        <card-stats title="Stats:">
            <div v-for="(stat, index) in getSelectedPokemon.stats" :key="index" class="text-base font-mono">
                {{ stat.stat.name }}: {{ stat.base_stat }}
            </div>
        </card-stats>
    </div>

</template>
 
<style scoped>
 
</style>