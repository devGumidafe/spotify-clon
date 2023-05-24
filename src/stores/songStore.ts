import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { Artist } from '@/models/artist';
import type { Track } from '@/models/track';
import data from '@/data/artist.json';

export const useSongStore = defineStore('song', () => {
  const isPlaying = ref(false);
  const audio = ref<HTMLAudioElement | undefined>();
  const currentTrack = ref<Track | null>();
  const currentArtist = ref<Artist | null>();

  const loadSong = (artist: Artist, track: Track) => {
    currentArtist.value = artist;
    currentTrack.value = track;

    if (audio && audio.value?.src) {
      audio.value?.pause();
      isPlaying.value = false;
      audio.value.src = '';
    }

    audio.value = new Audio();
    audio.value.src = track.path;

    setTimeout(() => {
      isPlaying.value = true;
      audio.value?.play();
    }, 200);
  };

  const playOrPauseSong = () => {
    if (audio.value?.paused) {
      isPlaying.value = true;
      audio.value.play();
    } else {
      isPlaying.value = false;
      audio.value?.pause();
    }
  };

  const playOrPauseThisSong = (artist: Artist, track: Track) => {
    const isDifferentTrack = currentTrack.value?.id !== track.id;

    if (!audio.value?.src || isDifferentTrack) {
      loadSong(artist, track);
    } else {
      playOrPauseSong();
    }
  };

  const prevSong = (currentTrack: Track) => {
    const track = data.tracks[currentTrack.id - 2];
    loadSong(data, track);
  };

  const nextSong = (currentTrack: Track) => {
    if (currentTrack.id === data.tracks.length) {
      const track = data.tracks[0];
      loadSong(data, track);
    } else {
      const track = data.tracks[currentTrack.id];
      loadSong(data, track);
    }
  };

  const playFromFirst = () => {
    resetState();

    const track = data.tracks[0];
    loadSong(data, track);
  };

  const resetState = () => {
    isPlaying.value = false;
    audio.value = undefined;
    currentTrack.value = null;
    currentArtist.value = null;
  };

  return {
    isPlaying,
    audio,
    currentTrack,
    currentArtist,
    loadSong,
    playOrPauseSong,
    playOrPauseThisSong,
    prevSong,
    nextSong,
    playFromFirst,
  };
});
