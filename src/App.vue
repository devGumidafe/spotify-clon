<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import SideBar from '@/components/side-bar/SideBar.vue';
import TopBar from '@/components/top-bar/TopBar.vue';
import MusicPlayer from '@/components/MusicPlayer.vue';
import { useSongStore } from '@/stores/songStore';

const useSong = useSongStore();
const { isPlaying, currentTrack} = storeToRefs(useSong);

onMounted(() =>{
  isPlaying.value = false;
})
</script>

<template>
  <div>
    <TopBar />

    <nav id="sideNav" class="h-screen w-[240px] p-6 fixed z-50 bg-black">
      <RouterLink to="/">
        <Image src="./images/spotify-logo.svg" alt="Logo Spotify" width="125" />
      </RouterLink>

      <SideBar />
    </nav>
  </div>

  <div
    class="fixed right-0 top-0 w-[calc(100%-240px)] overflow-auto h-full bg-gradient-to-b from-[#1C1C1C] to-black"
  >
    <div class="mt-[70px]"></div>
    <RouterView />
    <div class="mb-[100px]"></div>
  </div>

  <MusicPlayer v-if="currentTrack"/>
</template>

<style scoped>

</style>
