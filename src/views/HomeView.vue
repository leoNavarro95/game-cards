<script setup>
import { onMounted } from 'vue'
import { pageview } from 'vue-gtag'

import {useGameStore} from '../stores/GameStore'

import FlipableCard from '../components/FlipableCard.vue'
import ScoreBoard from '../components/ScoreBoard.vue'
import WinnerCard from '../components/WinnerCard.vue'

const gameStore = useGameStore()

const cardFliped = (pokeItem) => {
  gameStore.flipCard(pokeItem)
}

onMounted(() => {
  gameStore.getData()
  pageview("/")
})


// https://pokeapi.co/api/v2/pokemon/44/
// sprites.other.home.front_default
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/44.png

</script>
 
<template>
  

  <div v-if="gameStore.noExistPokemons" class="text-2xl text-center text-slate-600">
    Loading...
  </div>
  
  <div v-else>

    
    <score-board 
    :matches="gameStore.getMatches" :flips="gameStore.getTimeFliped" :misses="gameStore.getMisses"
    />

    <div class="grid gap-2 grid-cols-4 m-4">
      <flipable-card height="100px" width="80px"
          v-for="pokeItem in gameStore.getPokeCards"
          :is-matched="pokeItem.isMatched"
          :is-flipped="pokeItem.isFlipped"
          :bg_color="pokeItem.bg_color"
          @clicked="cardFliped(pokeItem)" 
          >
          <template #front>
            <img src="../assets/Pokemon-Logo.png" alt="Pokeom card" style="width:100%;height:100%;">
          </template>
          <template #back>
            <img :src="pokeItem.pic_url" :alt="'Name: ' + pokeItem.name" style="width:100%;height:100%;">
          </template>
        </flipable-card>
      </div>
      
      
      <winner-card 
        :flips="gameStore.getTimeFliped" v-if="gameStore.getMatches == 6"
        @new-game="gameStore.newGame"
        >
      </winner-card>
  </div>

</template>
 