import type { Track } from './track';

export interface Artist {
    id: number;
    name: string;
    albumCover: string;
    releaseYear: string;
    tracks: Track[];
}
