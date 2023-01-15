<script setup>
import { ref } from 'vue'
import { useGameStore } from '../stores/GameStore';
import FlipableCard from '../components/FlipableCard.vue'

 
const props = defineProps({

})

const gameStore = useGameStore()
 
</script>
 
<template>
    <div class="grid grid-cols-3 gap-2 p-2">
        <flipable-card height="90px" width="80px"
          v-for="pokeItem in gameStore.getSinglePokemons"
          :is-matched="true" :is-flipped="true" 
          >
          <template #back>
            <img :src="pokeItem.pic_url" :alt="'Name: ' + pokeItem.name" style="width:100%;height:100%;">
          </template>

        </flipable-card>
    </div>
</template>
 
<style scoped>
 
</style>