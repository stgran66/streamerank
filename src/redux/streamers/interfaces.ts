import { Platform, Streamer } from 'types';

export interface StreamersState {
  items: [] | Streamer[];
  selectedItem: null | Streamer;
  error: null | string;
  isLoading: boolean;
}

export interface NewStreamerData {
  name: string;
  platform: Platform;
  description?: string;
}

export type Vote = 'upvote' | 'downvote';

export type VoteData = {
  vote: Vote;
  id: string;
};
