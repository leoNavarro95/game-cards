<script setup>
    defineProps({
    isOpen: {type: Boolean, required: true},
    disabled: {type: Boolean, required: true},
    title: {type: String, default: "Title of modal"},
    })
</script>

<template>
      <div
        v-if="isOpen"
        class=" absolute z-0 inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
      >
        <div class="max-w-2xl p-6 pt-2 bg-blue-900 bg-opacity-60 backdrop-blur-md rounded-md shadow-xl">
          <div class="flex items-center justify-between">
            <h3 class="text-xl">{{title}}</h3>
          </div>
          <button
            @click="$emit('close')"
            class="absolute top-0 right-0 m-2 border border-blue-600 rounded-full active:bg-blue-600 active:text-white"
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