<script setup>
import { ref, computed } from 'vue'
import { useGameStore } from '../stores/GameStore';
import FlipableCard from '../components/FlipableCard.vue'
import { bgColorBytype } from '../util/getPokemonsInfo'


const rowLayout = ref(false)

const props = defineProps({

})

const emit = defineEmits(['selectCard'])

const currentIndex = ref(100)

const clickedCard = (index) => {
    currentIndex.value = index
    emit('selectCard', index)
    rowLayout.value = true
}

const classRowLayout = computed(()=>{
    return rowLayout.value ? ['grid-cols-3 md:grid-cols-6 lg:px-36'] : ['grid-cols-3'] 
})

const gameStore = useGameStore()
 
</script>
 
<template>
    <div 
        class="p-2 grid gap-2"
        :class="classRowLayout"
    >
        <flipable-card @clicked="clickedCard(index)" height="90px" width="80px"
            v-for="(pokeItem, index) in gameStore.getSinglePokemons" :key="index"
          :is-matched="true" :is-flipped="true" :is-selected="currentIndex == index"
          :bg_color="bgColorBytype[pokeItem.types[0].type.name]" 
          >
          <template #back>
            <img :src="pokeItem.pic_url" :alt="'Name: ' + pokeItem.name" style="width:100%;height:100%;">
          </template>

        </flipable-card>
    </div>
</template>
 
<style scoped>
 
</style>