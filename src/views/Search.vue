<script setup lang="ts">
import CategorySelect from '@/components/CategorySelect.vue';

import data from '@/data/playlist.json';

const { playList } = data;
</script>

<template>
  <div class="p-4">
    <div
      class="text-white text-2xl font-semibold border-2 border-[#20d464] p-3 inline-block"
      label=""
    >
      Playlist
    </div>

    <div class="py-1.5"></div>

    <div
      class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6"
    >
      <CategorySelect
        v-for="item in playList"
        :key="item.id"
        :category="item.name"
        :image="item.albumCover"
        :artistId="item.id"
      />
    </div>
  </div>
</template>

<style scoped></style>
