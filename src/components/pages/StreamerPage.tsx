import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { StyledContainer } from './Pages.styled';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getStreamer } from 'redux/streamers/operations';
import {
  selectError,
  selectIsLoading,
  selectStreamer,
} from 'redux/streamers/selectors';
import { platformIcons } from 'utils/platforms';
import { VotingButtons } from 'components/VotingButtons/VotingButtons';
import { CircularProgress } from '@mui/material';

export const StreamerPage = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const streamer = useAppSelector(selectStreamer);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    if (params.id) {
      dispatch(getStreamer(params.id));
    }
  }, [dispatch, params]);
  return (
    <StyledContainer>
      {streamer && (
        <div className='streamer-page-container'>
          <img src={streamer.avatar} alt='avatar' />
          <div>
            <h2> {streamer.name}</h2>
            <p className='streamer-platform'>
              {platformIcons[streamer.platform]}
              {streamer.platform}
            </p>
            <p>{streamer.description}</p>
            <div className='voting-buttons-container'>
              <VotingButtons
                upvote={streamer.upvote}
                downvote={streamer.downvote}
                _id={streamer._id}
                size={40}
              />
            </div>
          </div>
        </div>
      )}
      {isLoading && <CircularProgress />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </StyledContainer>
  );
};
