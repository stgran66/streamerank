import { useEffect } from 'react';
import { CircularProgress } from '@mui/material';

import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { getStreamers } from 'redux/streamers/operations';
import {
  selectError,
  selectIsLoading,
  selectStreamers,
} from 'redux/streamers/selectors';
import { StreamerItem } from '../StreamerItem/StreamerItem';
import { StyledList } from './StreamerList.styled';

export const StreamersList = () => {
  const dispatch = useAppDispatch();

  const streamers = useAppSelector(selectStreamers);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(getStreamers());
  }, [dispatch]);

  return (
    <>
      {streamers.length > 0 && (
        <StyledList>
          {streamers.map((streamer) => {
            return <StreamerItem streamer={streamer} key={streamer._id} />;
          })}
        </StyledList>
      )}
      {isLoading && <CircularProgress />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};
