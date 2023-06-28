import { Badge } from '@mui/material';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

import { useAppDispatch } from 'hooks/redux-hooks';
import { voteStreamer } from 'redux/streamers/operations';
import { StyledContainer } from './VotingButtons.styled';

interface VotingButtonsProps {
  upvote: number;
  downvote: number;
  _id: string;
  size: number;
}
export const VotingButtons = ({
  upvote,
  downvote,
  _id,
  size,
}: VotingButtonsProps) => {
  const dispatch = useAppDispatch();

  return (
    <StyledContainer>
      <Badge badgeContent={upvote} color='secondary' showZero>
        <FaThumbsUp
          size={size}
          color='#ffce00'
          onClick={() => dispatch(voteStreamer({ vote: 'upvote', id: _id }))}
        />
      </Badge>
      <Badge
        badgeContent={downvote}
        color='secondary'
        showZero
        className='thumbdown'
      >
        <FaThumbsDown
          size={size}
          color='#ff5a00'
          onClick={() => dispatch(voteStreamer({ vote: 'downvote', id: _id }))}
        />
      </Badge>
    </StyledContainer>
  );
};
