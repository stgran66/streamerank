import { StreamersList } from '../StreamerList/StreamersList';
import { AddStreamerForm } from '../AddStreamerForm/AddStreamerForm';
import { StyledContainer } from './Pages.styled';
export const HomePage = () => {
  return (
    <StyledContainer>
      <h2>Add new streamer</h2>
      <AddStreamerForm />
      <StreamersList />
    </StyledContainer>
  );
};
