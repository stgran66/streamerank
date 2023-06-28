import { StreamersList } from './StreamerList/StreamersList';
import { AddStreamerForm } from './AddStreamerForm/AddStreamerForm';

export const HomePage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        alignItems: 'center',
      }}
    >
      <h2>Add new streamer</h2>
      <AddStreamerForm />
      <StreamersList />
    </div>
  );
};
