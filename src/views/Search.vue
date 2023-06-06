<script setup lang="ts">
import { ref } from 'vue';
import CategorySelect from '@/components/CategorySelect.vue';
import data from '@/data/playlist.json';
import type { Artist } from '../models/artist';

const { playList } = data;
const filterPlayList = ref<Artist[]>(playList);
const query = ref('');

const onFilterPlayList = () => {
  filterPlayList.value = playList.filter((item) => {
    return item.name.toLowerCase().includes(query.value.toLowerCase());
  });
};
</script>

<template>
  <div class="p-6">
    <AutoComplete
      v-model="query"
      placeholder="Search for lists"
      @complete="onFilterPlayList"
      @clear="onFilterPlayList"
      :delay="500"
    />
    <div class="py-4"></div>

    <div
      class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6"
    >
      <CategorySelect
        v-for="item in filterPlayList"
        :key="item.id"
        :category="item.name"
        :image="item.albumCover"
        :artistId="item.id"
      />
    </div>
  </div>
</template>

<style scoped></style>
