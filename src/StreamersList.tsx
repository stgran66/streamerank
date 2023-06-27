import { useEffect, useState } from 'react';
import axios from 'axios';

import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { getStreamers } from 'redux/streamers/operations';
import { selectStreamers } from 'redux/streamers/selectors';

// type Platform = 'twitch' | 'youtube' | 'tiktok' | 'kick' | 'rumble';

// interface Streamer {
//   avatar: string;
//   name: string;
//   platform: Platform;
//   description?: string;
//   upvote: number;
//   downvote: number;
//   _id: string;
// }

// axios.defaults.baseURL = 'https://streamerank-api.onrender.com';

export const StreamersList = () => {
  const dispatch = useAppDispatch();
  const streamers = useAppSelector(selectStreamers);
  //   const [streamers, setStreamers] = useState<[] | Streamer[]>([]);

  useEffect(() => {
    dispatch(getStreamers());
  }, []);
  return (
    <ul>
      {streamers.length > 0 &&
        streamers.map((streamer) => {
          return <li key={streamer._id}>{streamer.name}</li>;
        })}
    </ul>
  );
};
