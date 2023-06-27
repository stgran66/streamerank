import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { getStreamers } from 'redux/streamers/operations';
import { selectStreamers } from 'redux/streamers/selectors';
import { StreamerItem } from './StreamerItem';

export const StreamersList = () => {
  const dispatch = useAppDispatch();
  const streamers = useAppSelector(selectStreamers);

  useEffect(() => {
    dispatch(getStreamers());
  }, [dispatch]);
  return (
    <ul>
      {streamers.length > 0 &&
        streamers.map((streamer) => {
          return <StreamerItem streamer={streamer} key={streamer._id} />;
        })}
    </ul>
  );
};
