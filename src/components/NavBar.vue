
<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { event as eventGTag } from 'vue-gtag'

import router from '../router'

const props = defineProps({
  title: { type: String, required: true }
})


let showMenu = ref(false)
const toggleNav = (selectedRoute) => {
  (showMenu.value = !showMenu.value)

  if(selectedRoute == null)
    eventGTag('Toggle icon', {
      event_category: 'Navigation',
      event_label: 'Press nav toggle icon',
      value: showMenu.value ? 'Open' : 'Close'
    })
  
  eventGTag('Nav to', {
        event_category: 'Navigation',
        event_label: 'Navigate to the path:',
        value: selectedRoute.name
      })

}

const currentRoute = computed(() => { return useRoute().name})

const allRoutes = router.getRoutes()

</script>

<template>
<div class="
    bg-indigo-600 border-gray-200
        rounded-b md:rounded 
    "
>
    <nav
      class="
        container
        px-2 sm:px-4
        py-2.5  
        mx-auto
        md:flex md:justify-between md:items-center
      "
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/"
          class="
            text-xl
            font-bold
            text-gray-100
            md:text-2xl
          "
          >{{ title }}
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav(null)" class="flex md:hidden">
          <button
            type="button"
            class="
              text-gray-100
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
            "
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="
          flex-col
          mt-8
          space-y-4
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
        "
      >
        <router-link v-for="(route, index) in allRoutes" :key="index"
          @click="toggleNav(route)" :to="route.path" class="text-gray-100 hover:text-indigo-400" :class="{'underline':currentRoute == 'Home'}">
            {{route.name.toUpperCase()}}
        </router-link>
        
      </ul>
    </nav>
  </div>
</template>
