type Platform = 'twitch' | 'youtube' | 'tiktok' | 'kick' | 'rumble';

export interface Streamer {
  avatar: string;
  name: string;
  platform: Platform;
  description?: string;
  upvote: number;
  downvote: number;
  _id: string;
}

export interface StreamersState {
  items: [] | Streamer[];
  selectedItem: null | Streamer;
  error: null | string | {};
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
