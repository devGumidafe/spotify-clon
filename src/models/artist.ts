import type { Track } from './track';

export interface Artist {
    name: string;
    albumCover: string;
    releaseYear: string;
    tracks: Track[];
}
