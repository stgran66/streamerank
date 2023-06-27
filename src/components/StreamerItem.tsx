import { Streamer } from 'types';
import {
  FaThumbsUp,
  FaThumbsDown,
  FaKickstarter,
  FaTwitch,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa';
import { GiPoolTriangle } from 'react-icons/gi';
import { StyledStreamerItem } from './StreamerItem.styled';
import { Badge } from '@mui/material';
import { useAppDispatch } from 'hooks/redux-hooks';
import { voteStreamer } from 'redux/streamers/operations';

const platforms = {
  kick: <FaKickstarter size={24} color='#6b9c3b' />,
  twitch: <FaTwitch size={24} color='#9146ff' />,
  youtube: <FaYoutube size={24} color='#FF0000' />,
  tiktok: <FaTiktok size={24} />,
  rumble: <GiPoolTriangle size={24} color='#85c742' />,
};

interface StreamerItemProps {
  key: string;
  streamer: Streamer;
}
export const StreamerItem = ({ streamer }: StreamerItemProps) => {
  const { name, avatar, _id, platform, upvote, downvote } = streamer;
  const dispatch = useAppDispatch();
  return (
    <StyledStreamerItem>
      <div>
        <img src={avatar} alt='avatart' />
        <p>{name}</p>
        <p>{platforms[platform]}</p>
      </div>
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
