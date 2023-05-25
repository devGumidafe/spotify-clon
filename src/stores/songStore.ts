import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { Artist } from '@/models/artist';
import type { Track } from '@/models/track';
import data from '@/data/playlist.json';

const { playList } = data;

export const useSongStore = defineStore('song', () => {
  const currentPlayList = ref();
  const isPlaying = ref(false);
  const audio = ref<HTMLAudioElement | undefined>();
  const currentTrack = ref<Track | null>();
  const currentArtist = ref<Artist | null>();

  const loadPlayList = (idPlaylist: number) => {
    currentPlayList.value = playList.find((playlist) => playlist.id === idPlaylist);
  };

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
    const track = currentPlayList.value.tracks[currentTrack.id - 2];
    loadSong(currentPlayList.value, track);
  };

  const nextSong = (currentTrack: Track) => {
    if (currentTrack.id === currentPlayList.value.tracks.length) {
      const track = currentPlayList.value.tracks[0];
      loadSong(currentPlayList.value, track);
    } else {
      const track = currentPlayList.value.tracks[currentTrack.id];
      loadSong(currentPlayList.value, track);
    }
  };

  const playFromFirst = () => {
    resetState();
    const track = currentPlayList.value.tracks[0];
    loadSong(currentPlayList.value, track);
  };

  const resetState = () => {
    currentPlayList.value = playList[0];
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
    loadPlayList,
    currentPlayList
  };
});
