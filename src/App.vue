<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {RouterView} from 'vue-router'

import NavBar from './components/NavBar.vue'
import MainLayout from './layout/MainLayout.vue';


</script>

<template>
  <NavBar title="Flip Card Game" />

  <main-layout>
    <RouterView/>
  </main-layout>
</template>
