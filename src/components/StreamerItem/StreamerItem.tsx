import { Streamer } from 'types';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { StyledStreamerItem } from './StreamerItem.styled';
import { Badge } from '@mui/material';
import { useAppDispatch } from 'hooks/redux-hooks';
import { voteStreamer } from 'redux/streamers/operations';
import { StyledLink } from './StreamerItem.styled';
import { platformIcons } from 'utils/platforms';

interface StreamerItemProps {
  key: string;
  streamer: Streamer;
}
export const StreamerItem = ({ streamer }: StreamerItemProps) => {
  const { name, avatar, _id, platform, upvote, downvote } = streamer;
  const dispatch = useAppDispatch();
  return (
    <StyledStreamerItem>
      <StyledLink to={`/streamer/${_id}`}>
        <img src={avatar} alt='avatart' />
        <p>{name}</p>
        <p>
          {platformIcons[platform]}
          {platform}
        </p>
      </StyledLink>
      <div>
        <Badge badgeContent={upvote} color='secondary' showZero>
          <FaThumbsUp
            size={24}
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
            size={24}
            color='#ff5a00'
            onClick={() =>
              dispatch(voteStreamer({ vote: 'downvote', id: _id }))
            }
          />
        </Badge>
      </div>
    </StyledStreamerItem>
  );
};
