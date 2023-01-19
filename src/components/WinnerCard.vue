<script setup>
import { ref } from 'vue';
import { event } from 'vue-gtag'

import ResumeCards from '../layout/ResumeCardLayout.vue'
import LButton from './LButton.vue'
import LModal from './LModal.vue'
import PokeInfo from './PokeInfo.vue';

import Confetti from "vue-confetti/src/confetti.js"

const confetti = new Confetti()

const showPokemons = ref(false)
const showCardsInfo = ref(false)

const props = defineProps({
  flips: {type: Number, required: true}
})

const emit = defineEmits(['newGame'])

const closeModal = () => {
  showPokemons.value = false
  showCardsInfo.value = false
}

const pokemonIndex = ref(0)

const showPokeInfo = (index) => {
  pokemonIndex.value = index
  showCardsInfo.value = true
  event('showPokemonsInfo', { method: 'Google' })
}

const showPokemonCards = () => {
  showPokemons.value = !showPokemons.value
  event('showPokemons', { method: 'Google' })
}
 
// this.$confetti.start()
const throwConfetti = () =>{
  confetti.start()

  setTimeout(() => {
      confetti.stop()
  }, 3000);
}

throwConfetti()

</script>

<template>
<div class="h-full w-full absolute top-0 left-0 bg-gray-800 bg-opacity-25 shadow-lg backdrop-blur-md">
  <div class="flex justify-center items-center md:px-10 px-2 py-1 md:m-10 m-1 mt-10">
    <div class="text-white rounded-xl border border-white p-4 md:p-8">

      <div class="mb-8 flex flex-col items-center">
        <img src="../assets/Pokemon-Logo.png" width="200" alt="pokemon-logo" srcset="" />
        <h1 class="mb-2 text-2xl">You won! 🎉</h1>
        <span class="text-gray-300">You have matched the 6 couples of cards in {{ props.flips }} flipes </span>
      </div>

      <div class="mt-8 flex flex-col items-center text-lg">
          <l-button @click="showPokemonCards()">👀 Pokemons</l-button>
          <l-button @click="emit('newGame')">🔁 Play again </l-button>
          <l-button>🔗 Share </l-button>
        </div>
        
        <l-modal title="Discovered pokemons:" :is-open="showPokemons" :disabled="false" :is-maximized="showCardsInfo"
        @close="closeModal()"
        >
        <ResumeCards @select-card="(pokemon) => showPokeInfo(pokemon)"></ResumeCards>
        <poke-info v-if="showCardsInfo" :pokemon-index="pokemonIndex"></poke-info>
        
      </l-modal>


    </div>
  </div>
</div>
</template>
