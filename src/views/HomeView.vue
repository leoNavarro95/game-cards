
<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import { useCounterStore } from '../stores/CounterStore'

const store = useCounterStore()
</script>

<template>
    <HelloWorld msg="Vite + Vue + Pinia" />
    <h1 class="text-3xl font-bold underline text-red-400">
    Hello world!
  </h1>
    <div> Pinia counter: {{ store.count }} </div>
    <button @click="store.increment">+</button>
    <button @click="store.decrement">-</button>

</template>