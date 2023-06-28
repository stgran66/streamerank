import { styled } from '@mui/system';

export const StyledForm = styled('form')({
  width: '100%',
  padding: '20px 60px',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  '>div': {
    display: 'flex',
    gap: 20,

    '>div': {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      minWidth: 105,
    },
  },

  button: {
    backgroundColor: '#9146ff',
    ':hover': {
      backgroundColor: '#6441a5',
    },
  },
});
