<script setup lang="ts">
import { ref, toRefs } from 'vue';
import { RouterLink } from 'vue-router';
import uniqolor from 'uniqolor';

const randColor = ref();
randColor.value = uniqolor.random();

const props = defineProps({
  category: String,
  image: String,
  artistId: Number,
});

const { category, artistId } = toRefs(props);
</script>

<template>
  <RouterLink :to="{ name: 'library', params: { artistId: artistId}}">
    <div
      v-if="randColor.color"
      :style="`background-color: ${randColor.color};`"
      class="contrast-[2] brightness-[0.87] rounded-xl aspect-square relative overflow-hidden"
    >
      <h1 class="text-white pt-3 pl-4 font-semibold text-[23px]">
        {{ category }}
      </h1>
      <Image
        class="absolute contrast-[0.55] -right-3.5 bottom-0 max-w-[100px] rotate-[20deg]"
        :src="image || ''"
      />
    </div>
  </RouterLink>
</template>

<style scoped></style>
