import fs from 'fs';
import path from 'path';

const tracksFile = path.join(process.cwd(), 'content/tracks/tracks.json');

export interface TrackLink {
  platform: string;
  url: string;
  icon: string;
  action: 'play' | 'buy';
}

export interface Track {
  slug: string;
  title: string;
  artist: string;
  releaseDate: string;
  coverArt: string;
  description?: string;
  links: TrackLink[];
}

interface TracksData {
  tracks: Track[];
}

function getTracksData(): TracksData {
  if (!fs.existsSync(tracksFile)) {
    return { tracks: [] };
  }
  const fileContents = fs.readFileSync(tracksFile, 'utf8');
  return JSON.parse(fileContents) as TracksData;
}

export function getAllTracks(): Track[] {
  const data = getTracksData();
  return data.tracks.sort(
    (a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
  );
}

export function getTrackBySlug(slug: string): Track | null {
  const data = getTracksData();
  return data.tracks.find((track) => track.slug === slug) || null;
}

export function getAllTrackSlugs(): string[] {
  const data = getTracksData();
  return data.tracks.map((track) => track.slug);
}
