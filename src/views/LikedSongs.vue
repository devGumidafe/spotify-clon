<script setup lang="ts">
import { ref, onMounted } from 'vue';
import SongRow from '@/components/SongRow.vue';
import type { Artist } from '@/models/artist';
import { useSongStore } from '@/stores/songStore';
import { storeToRefs } from 'pinia';

const useSong = useSongStore();
const { isPlaying, currentTrack, currentArtist, currentPlayList } = storeToRefs(useSong);

const playFunc = () => {
  if (currentTrack.value && currentArtist.value) {
    useSong.playOrPauseThisSong(currentArtist.value, currentTrack.value);
    return;
  }
  useSong.playFromFirst();
};

const artist = ref<Artist>();

onMounted(() => {
  useSong.loadPlayList(1);
  artist.value = currentPlayList.value;
});
</script>

<template>
  <div class="p-4 overflow-x-hidden" v-if="artist">
    <div
      class="text-white text-2xl font-semibold border-2 border-[#20d464] p-3 inline-block"
      label=""
    >
      Liked Songs
    </div>

    <div class="py-1.5"></div>
    <div class="flex item-center w-full relative h-full">
      <Image :width="140" src="/images/albumCovers/liked-music.webp" />

      <div class="w-full ml-5 flex flex-col gap-2">
        <h3
          style="font-size: 33px"
          class="text-white w-full hover:underline cursor-pointer top-0 font-bosemiboldld"
        >
          Liked Songs
        </h3>

        <div class="text-gray-300 text-[13px] flex">
          <div class="flex">Album</div>
          <div class="ml-2 flex">
            <div class="circle mt-2 mr-2" />
            <span class="-ml-0.5">2023</span>
          </div>

          <div class="ml-2 flex">
            <div class="circle mt-2 mr-2" />
            <span class="-ml-0.5">{{ artist.tracks?.length }} songs</span>
          </div>
        </div>

        <div class="flex gap-4 items-center justify-start bottom-0 mb-1.5">
          <Button
            v-if="!isPlaying"
            class="border-0"
            @click="playFunc()"
            icon="pi pi-play"
            aria-label="Play"
            rounded
          />
          <Button
            v-else
            class="border-0"
            @click="playFunc()"
            icon="pi pi-pause"
            aria-label="Pause"
            rounded
          />
        </div>
      </div>
    </div>

    <div class="mt-6">
      <div class="flex items-center justify-between px-5 pt-2">
        <div class="flex items-center justify-between text-gray-400">
          <div class="mr-7">#</div>
          <div class="text-sm">Title</div>
        </div>

        <div>
          <i class="pi pi-clock" style="color: #fff"></i>
        </div>
      </div>

      <div class="border-b border-b-[#2a2a2a] mt-2"></div>
      <div class="mb-4"></div>

      <ul
        class="w-full"
        v-for="(track, index) in artist.tracks"
        :key="track.id"
      >
        <SongRow :artist="artist" :track="track" :index="index" />
      </ul>
    </div>
  </div>
</template>

<style scoped>
.circle {
  width: 4px;
  height: 4px;
  background-color: rgb(189, 189, 189);
  border-radius: 100%;
}
</style>
