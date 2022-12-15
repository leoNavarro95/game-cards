<script setup>
import { ref, onMounted, computed } from 'vue'
import {shuffle, makeCouples, getRndNumArr} from '../util/algorithms'
import {getPokemonsByArr} from '../util/getPokemonsInfo'

import FlipableCard from '../components/FlipableCard.vue'

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
  
  <div v-else class="grid gap-2 grid-cols-4 m-4">
    <flipable-card height="90px" width="80px" v-for="pokeItem in pokemonsCouples" >
      <template #front>
        <div>{{pokeItem.name}}</div>
      </template>
      <template class="bg-red-300" #back>
        <img :src="pokeItem.pic_url" :alt="'Name: ' + pokeItem.name" style="width:100%;height:100%;">
      </template>
    </flipable-card>
    
  </div>




</template>
 
<style scoped>
 /* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
</style>