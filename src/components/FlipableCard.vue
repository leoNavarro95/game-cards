<script setup>
import { computed, ref } from 'vue'


const props = defineProps({
    width:{ type:String, required: false, default: '100px' },
    height:{ type:String, required: false, default: '100px' },
    bg_color: {type: String, default: "bg-blue-400"},
    
    isMatched:{ type: Boolean, required: true},
    isFlipped: { type: Boolean, required: true},
    isSelected: { type: Boolean, default: false},

})

const emit = defineEmits(['clicked'])

const flipped = ref(false)

const clickOnCard = () => {
  emit('clicked')
  flipped.value = true
}

const classFlipped = computed(() => {
  return props.isSelected ? 'rounded-md shadow-xl shadow-gray-800' : 'shadow-none'
})

const rotate = computed(() => {
  return props.isFlipped ? 'rotateY(180deg)' : 'transform: none'
})

</script>
 
<template>
    <div @click="clickOnCard" class="flip-card select-none cursor-pointer w-full m-auto" :class="classFlipped">
        <div class="flip-card-inner">
            <div class="flip-card-front rounded-md">
                <!-- <img src="img_avatar.png" alt="Avatar" style="width:100px;height:100px;"> -->
                <slot name="front" />
                <!-- use <template #front>...</template> -->
              </div>
              <div class="flip-card-back rounded-md" :class="props.bg_color">
                <slot name="back" />
                <!-- use <template #back>...</template> -->
            </div>
        </div>
    </div>
</template>
 

<style scoped>
 
.flip-card {
  background-color: transparent;
  width: v-bind(width);
  height: v-bind(height);
  perspective: 1000px; /*Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: v-bind(rotate);
}

/* Do an horizontal flip when you move the mouse over the flip box container */
/* .flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
} */

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: rgb(35, 35, 150);
  color: black;
}

/* Style the back side */
.flip-card-back {
  /* background-color: rgba(30, 143, 255, 0.473); */
  color: white;
  transform: rotateY(180deg);
}
</style>