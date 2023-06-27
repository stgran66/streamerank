export type Platform = 'twitch' | 'youtube' | 'tiktok' | 'kick' | 'rumble';

export interface Streamer {
  avatar: string;
  name: string;
  platform: Platform;
  description?: string;
  upvote: number;
  downvote: number;
  _id: string;
}
