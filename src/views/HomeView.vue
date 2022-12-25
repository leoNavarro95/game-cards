<script setup>
import { ref, onMounted, computed } from 'vue'
import {shuffle, makeCouples, getRndNumArr} from '../util/algorithms'
import {getPokemonsByArr} from '../util/getPokemonsInfo'
import {useGameStore} from '../stores/GameStore'

import FlipableCard from '../components/FlipableCard.vue'
import ScoreBoard from '../components/ScoreBoard.vue'

const gameStore = useGameStore()


var pokemonsIDs = getRndNumArr(6, 650) //make an arr of 6 random numbers between 0 and 650
console.log(pokemonsIDs);
var pokemons = ref([])
var pokemonsCouples = ref([])

const existPokemons =   computed(() => {return pokemons.value.length == 0})

const getData = async () => {
  pokemons.value = await getPokemonsByArr(pokemonsIDs)
  pokemonsCouples.value = makeCouples(pokemons.value)         //doubles de arr to make couples
  pokemonsCouples.value = shuffle(pokemonsCouples.value)      //shuffles all the objects into the array
  console.log(pokemonsCouples.value)
}

const cardFliped = (flip, pokeItem) => {
  gameStore.flipCard(pokeItem.name, flip)
}

const lastMisses = ref(0)

const gotMissed = computed(() =>{
  if(gameStore.misses > lastMisses.value){
    lastMisses.value = gameStore.misses
    return true
  }
  return false
})

onMounted(() => {
  getData()
})


// https://pokeapi.co/api/v2/pokemon/44/
// sprites.other.home.front_default
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/44.png

</script>
 
<template>
  

  <div v-if="existPokemons" class="text-2xl text-center text-slate-600">
    Loading...
  </div>
  
  <div v-else>

    <score-board :matches="gameStore.getMatches" :flips="gameStore.getTimeFliped"/>

    <div class="grid gap-2 grid-cols-4 m-4">
      <flipable-card height="100px" width="80px"
          v-for="pokeItem in pokemonsCouples" :key="pokeItem.name"
          :card-id="pokeItem.name" :rotate-back="false"
          @fliped=" (fliped) => cardFliped(fliped, pokeItem)" 
      >
        <template #front>
            <img src="../assets/Pokemon-Logo.png" alt="Pokeom card" style="width:100%;height:100%;">
        </template>
        <template #back>
          <img :src="pokeItem.pic_url" :alt="'Name: ' + pokeItem.name" style="width:100%;height:100%;">
        </template>
      </flipable-card>
    </div>

    
  </div>




</template>
 
<style scoped>
 /* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
</style>