<script setup lang="ts">
import { ref, toRefs, onMounted, computed } from 'vue';
import type { Artist } from '@/models/artist';
import type { Track } from '@/models/track';
import { useSongStore } from '@/stores/songStore.js'
import { storeToRefs } from 'pinia';
import { useLikeSongStore } from '@/stores/likeSongStore';

interface Props {
  track: Track;
  artist: Artist;
  index: number;
}

const props = defineProps<Props>();
const { track, artist, index } = toRefs(props);

const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)

const useLikeSong = useLikeSongStore();
const {toggleLikeSong} = useLikeSong;
const { likeSongs } = storeToRefs(useLikeSong);

const isLiked = computed(() => {
  const { id } = track.value!;
  return likeSongs.value.some((song: Track) => song.id === id);
});

const isHover = ref(false);
const isTrackTime = ref();

const onHover = () => {
  isHover.value = true;
};

const offHover = () => {
  isHover.value = false;
};

const calculateTrackTime = () => {
  const { path } = track?.value!;
  const audio = new Audio(path);
  audio.addEventListener('loadedmetadata', () => {
    const { duration } = audio;
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    isTrackTime.value = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  });
};
onMounted(calculateTrackTime);
</script>

<template>
  <li
    class="flex items-center justify-between rounded-md hover:bg-[#2A2929]"
    @mouseenter="onHover"
    @mouseleave="offHover"
  >
    <div class="flex items-center w-full py-1.5">
      <div v-if="isHover" class="w-[40px] ml-[5px] mr-[10px] cursor-pointer">
        <Button
          v-if="!isPlaying"
          class="border-0 play-button"
          icon="pi pi-play"
          @click="useSong.playOrPauseThisSong(artist, track)"
          rounded
        />

        <Button
          v-else-if="isPlaying && currentTrack?.name !== track.name"
          class="border-0 play-button"
          icon="pi pi-play"
          @click="useSong.loadSong(artist, track)"
          rounded
        />

        <Button
          v-else
          class="border-0"
          icon="pi pi-pause play-button"
          @click="useSong.playOrPauseSong()"
          rounded
        />
      </div>
      <div v-else class="text-white font-semibold w-[40px] ml-5">
        <span
          :class="{
            'text-green-500': currentTrack && currentTrack.name === track.name,
          }"
        >
          {{ index }}
        </span>
      </div>
      <div>
        <div
          :class="{
            'text-green-500': currentTrack && currentTrack.name === track.name,
          }"
          class="text-white font-semibold"
        >
          {{ track.name }}
        </div>
        <div class="text-sm font-semibold text-gray-400">{{ artist.name }}</div>
      </div>
    </div>
    <div class="flex items-center">
      <Button
        
        @click="toggleLikeSong(track)"
        class="border-none"
        :icon="isLiked ? 'pi pi-heart-fill' : 'pi pi-heart'"
        rounded
      />
      <div v-if="isTrackTime" class="text-xs mx-5 text-gray-400">
        {{ isTrackTime }}
      </div>
    </div>
  </li>
</template>

<style scoped>
.p-button:hover {
  background-color: transparent;
}
:deep(.p-button-icon) {
  color: #1bd760;
}
</style>
