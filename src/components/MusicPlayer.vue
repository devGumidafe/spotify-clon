<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useSongStore } from '@/stores/songStore';
import MusicPlayerVolumen from './MusicPlayerVolumen.vue';

const useSong = useSongStore();
const { isPlaying, audio, currentTrack, currentArtist } = storeToRefs(useSong);

const isHover = ref(false);
const isTrackTimeCurrent = ref();
const isTrackTimeTotal = ref();
const seeker = ref();
const seekerContainer = ref();
const range = ref(0);

onMounted(() => {
  if (audio.value) {
    setTimeout(() => {
      timeUpdate();
      loadMetadata();
    }, 300);
  }

  if (currentTrack.value) {
    seeker.value.addEventListener('change', function () {
      const time = audio.value!.duration * (seeker.value.value / 100);
      audio.value!.currentTime = time;
    });

    seeker.value.addEventListener('mousedown', function () {
      audio.value?.pause();
      isPlaying.value = false;
    });

    seeker.value.addEventListener('mouseup', function () {
      audio.value!.play();
      isPlaying.value = true;
    });

    seekerContainer.value.addEventListener('click', function (e: any) {
      const clickPosition =
        (e.pageX - seekerContainer.value.offsetLeft) /
        seekerContainer.value.offsetWidth;
      const time = audio.value!.duration * clickPosition;
      audio.value!.currentTime = time;
      seeker.value.value =
        (100 / audio.value!.duration) * audio.value!.currentTime;
    });
  }
});

const timeUpdate = () => {
  audio.value?.addEventListener('timeupdate', function () {
    const minutes = Math.floor(audio.value!.currentTime / 60);
    const seconds = Math.floor(audio.value!.currentTime % 60);
    isTrackTimeCurrent.value = `${minutes}:${seconds
      .toString()
      .padStart(2, '0')}`;

    const value = audio.value!.duration
      ? (100 / audio.value!.duration) * audio.value!.currentTime
      : 0;
    range.value = value;
    seeker.value.value = value;
  });
};

const loadMetadata = () => {
  audio.value?.addEventListener('loadedmetadata', function () {
    const duration = audio.value!.duration || 0;
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    isTrackTimeTotal.value = `${minutes}:${seconds
      .toString()
      .padStart(2, '0')}`;
  });
};

watch(
  () => audio.value,
  () => {
    timeUpdate();
    loadMetadata();
  }
);

watch(
  () => isTrackTimeCurrent.value,
  (time) => {
    if (time && time == isTrackTimeTotal.value && currentTrack.value) {
      useSong.nextSong(currentTrack.value);
    }
  }
);
</script>

<template>
  <div
    id="MusicPlayer"
    v-if="audio"
    class="fixed flex items-center justify-between bottom-0 w-full z-50 h-[90px] bg-[#181818] border-t border-t-[#272727]"
  >
    <div class="flex items-center w-1/4">
      <div class="flex items-center ml-4">
        <Image
          class="rounded-sm shadow-2xl"
          width="55"
          :src="currentArtist?.albumCover"
        />
        <div class="ml-4">
          <div class="text-[14px] text-white hover:underline cursor-pointer">
            {{ currentTrack?.name }}
          </div>
          <div
            class="text-[11px] text-gray-500 hover:underline hover:text-white cursor-pointer"
          >
            {{ currentArtist?.name }}
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-[35%] mx-auto w-2/4 mb-3">
      <div class="flex-col items-center justify-center">
        <div class="buttons flex items-center justify-center h-[30px]">
          <Button
            icon="pi pi-backward"
            class="mx-2 border-0 p-button-lg"
            rounded
            @click="useSong.prevSong(currentTrack!)"
          />

          <Button
            :icon="isPlaying ? 'pi pi-pause' : 'pi pi-play'"
            class="p-1 mx-3 border-0 p-button-lg"
            rounded
            @click="useSong.playOrPauseThisSong(currentArtist!, currentTrack!)"
          />

          <Button
            icon="pi pi-forward"
            class="mx-2 border-0 p-button-lg"
            @click="useSong.nextSong(currentTrack!)"
            rounded
          />
        </div>

        <div class="flex items-center h-[25px]">
          <div
            v-if="isTrackTimeCurrent"
            class="text-white text-[12px] pr-2 pt-[11px]"
          >
            {{ isTrackTimeCurrent }}
          </div>
          <div
            ref="seekerContainer"
            class="w-full relative mt-2 mb-3"
            @mouseenter="isHover = true"
            @mouseleave="isHover = false"
          >
            <input
              v-model="range"
              ref="seeker"
              type="range"
              class="absolute rounded-full my-2 w-full h-0 z-40 appearance-none bg-opacity-100 focus:outline-none accent-white"
              :class="{ rangeDotHidden: !isHover }"
            />
            <div
              class="pointer-events-none mt-[6px] absolute h-[4px] z-10 inset-y-0 left-0 w-0"
              :style="`width: ${range}%;`"
              :class="isHover ? 'bg-green-500' : 'bg-white'"
            />
            <div
              class="absolute h-[4px] z-[-0] mt-[6px] inset-y-0 left-0 w-full bg-gray-500 rounded-full"
            />
          </div>
          <div
            v-if="isTrackTimeTotal"
            class="text-white text-[12px] pl-2 pt-[11px]"
          >
            {{ isTrackTimeTotal }}
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center w-1/4 justify-end pr-10">
      <MusicPlayerVolumen />
    </div>
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
