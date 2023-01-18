<script setup>
import { computed } from 'vue';


const props = defineProps({
  isOpen: {type: Boolean, required: true},
  disabled: {type: Boolean, required: true},
  isMaximized: {type: Boolean, default: false},
  title: {type: String, default: "Title of modal"},
})

const classMaximized = computed(()=>{
  if(props.isMaximized === true)
    return ['top-2', 'left-0', 'w-full', 'bg-opacity-100']
  
  //not maximized
  return ['']
})

</script>

<template>
      <div
        v-if="isOpen"
        class="absolute inset-0 flex items-center justify-center z-0 bg-gray-700 bg-opacity-50 transition-all"
      >
        <div 
          class="absolute p-6 pt-2 bg-blue-700 bg-opacity-60 backdrop-blur-md rounded-md shadow-xl border border-gray-400"
          :class="classMaximized"
        >
          <div class="flex items-center justify-between">
            <h3 class="text-xl">{{title}}</h3>
          </div>
          <button
            @click="$emit('close')"
            class="absolute top-0 right-0 m-2 border border-gray-400 rounded-full active:bg-blue-600"
          >
            ✖️
          </button>
          <div class="mt-4">
            <div class="mb-4 text-sm">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
</template>