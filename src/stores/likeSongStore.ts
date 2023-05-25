import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { Track } from '@/models/track';

export const useLikeSongStore = defineStore('likeSongs', () => {
  const likeSongs = ref<Track[]>([]);

  const addLikeSong = (track: Track) => {
    likeSongs.value = [...likeSongs.value, track];
  };

  const removeLikeSong = (track: Track) => {
    likeSongs.value = likeSongs.value.filter((song) => song.id !== track.id);
  };

  const toggleLikeSong = (track: Track) => {
    const foundIndex = likeSongs.value.findIndex((song) => song.id === track.id);

    if (foundIndex !== -1) {
      removeLikeSong(track);
    } else {
      addLikeSong(track);
    }
  };

  return {
    likeSongs,
    toggleLikeSong
  };
});
