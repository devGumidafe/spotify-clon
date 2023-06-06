<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useSongStore } from '@/stores/songStore';
import { storeToRefs } from 'pinia';

const useSong = useSongStore();
const { audio } = storeToRefs(useSong);

let isHover = ref(false);

// PLAYER REFS
let vol = ref(80);
let volume = ref();

onMounted(() => {
  volume.value.addEventListener('input', (e: any) => {
    audio.value!.volume = e.currentTarget.value / 100;
  });
});
</script>

<template>
  <Button
    icon="pi pi-volume-off"
    v-if="vol == 0"
    class="mx-2 border-0 p-button-lg"
    rounded
  />
  <Button
    v-else
    icon="pi pi-volume-up"
    class="mx-2 border-0 p-button-lg"
    rounded
  />
  <div
    class="flex items-center ml-2 w-[150px] relative mt-2 mb-[23px]"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <input
      v-model="vol"
      ref="volume"
      type="range"
      class="mt-[24px] absolute rounded-full my-2 w-full h-0 z-40 appearance-none bg-opacity-100 focus:outline-none accent-white"
      :class="{ rangeDotHidden: !isHover }"
    />
    <div
      class="pointer-events-none mt-[6px] absolute h-[4px] z-10 inset-y-0 left-0 w-0"
      :style="`width: ${vol}%;`"
      :class="isHover ? 'bg-green-500' : 'bg-white'"
    />
    <div
      class="absolute h-[4px] z-[-0] mt-[6px] inset-y-0 left-0 w-full bg-gray-500 rounded-full"
    />
  </div>
</template>

<style scoped>
.rangeDotHidden[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 0;
  height: 0;
}
</style>
