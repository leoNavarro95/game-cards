<script setup>
import { ref, computed } from 'vue'


const props = defineProps({
    width:{ type:String, required: false, default: '100px' },
    height:{ type:String, required: false, default: '100px' },
    rotateBack:{ type: Boolean, required: true},
    cardId:{ type: String, required: true},

})

const emit = defineEmits(['fliped'])

const fliped = ref(false)

const flipCard = () => {
  fliped.value = !fliped.value
  emit('fliped', fliped.value)
}

const rotate = computed(() => {
  return (fliped.value || props.rotateBack) ? 'rotateY(180deg)' : 'transform: none'
})

</script>
 
<template>
    <div @click="flipCard" class="flip-card select-none cursor-pointer">
        <div class="flip-card-inner">
            <div class="flip-card-front rounded-md">
                <!-- <img src="img_avatar.png" alt="Avatar" style="width:100px;height:100px;"> -->
                <slot name="front" />
                <!-- use <template #front>...</template> -->
              </div>
              <div class="flip-card-back rounded-md">
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
  background-color: rgba(30, 143, 255, 0.473);
  color: white;
  transform: rotateY(180deg);
}
</style>