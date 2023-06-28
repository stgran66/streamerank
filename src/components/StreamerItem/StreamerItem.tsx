import { Streamer } from 'types';
import { platformIcons } from 'utils/platforms';
import { VotingButtons } from 'components/VotingButtons/VotingButtons';
import { StyledLink, StyledStreamerItem } from './StreamerItem.styled';

interface StreamerItemProps {
  key: string;
  streamer: Streamer;
}

export const StreamerItem = ({ streamer }: StreamerItemProps) => {
  const { name, avatar, _id, platform, upvote, downvote } = streamer;
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
      <VotingButtons upvote={upvote} downvote={downvote} _id={_id} size={24} />
    </StyledStreamerItem>
  );
};
