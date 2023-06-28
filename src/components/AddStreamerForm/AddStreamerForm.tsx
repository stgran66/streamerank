import { useAppDispatch } from 'hooks/redux-hooks';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Platform } from 'types';
import { platforms } from 'utils/platforms';
import { addStreamer } from 'redux/streamers/operations';
import {
  OutlinedInput,
  Button,
  Select,
  MenuItem,
  InputLabel,
  TextField,
} from '@mui/material';
import { StyledForm } from './AddStreamerFrom.styled';

type Inputs = {
  name: string;
  platform: Platform;
  description: string;
};

export const AddStreamerForm = () => {
  const disaptch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    disaptch(addStreamer(data));
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <InputLabel>Name</InputLabel>
          <OutlinedInput {...register('name', { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>
        <div>
          <InputLabel>Platform</InputLabel>
          <Select
            defaultValue='twitch'
            {...register('platform', {
              required: true,
              validate: (value) => platforms.includes(value),
            })}
          >
            {platforms.map((platform) => (
              <MenuItem key={platform} value={platform}>
                {platform}
              </MenuItem>
            ))}
          </Select>
          {errors.platform && <span>This field is required</span>}
        </div>
      </div>

      <InputLabel>Description</InputLabel>
      <TextField multiline {...register('description')} />

      <Button variant='contained' type='submit'>
        Add
      </Button>
    </StyledForm>
  );
};
