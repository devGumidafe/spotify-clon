<script setup lang="ts">
import {toRefs } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  image: String,
  title: String,
  subTitle: String,
});

const { image, title, subTitle } = toRefs(props);
</script>

<template>
  <RouterLink to="library">
    <Card class="bg-[#111111] p-2 m-2 hover:bg-[#252525] cursor-pointer">
      <template #header>
        <Image class="rounded-md" :src="image" :alt="title" />
      </template>
      <template #title>
        <h1 class="text-white font-semibold text-[17px]">{{ title }}</h1>
      </template>
      <template #subtitle>
        <h3 class="text-gray-400 text-[14px]">{{ subTitle }}</h3>
      </template>
    </Card>
  </RouterLink>
</template>

<style scoped>
:deep(.p-card-content) {
  padding: 0;
}

:deep(img) {
  border-radius: 5px;
}
</style>
