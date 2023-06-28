import { styled } from '@mui/system';

export const StyledContainer = styled('div')({
  display: 'flex',
  gap: 15,

  svg: {
    cursor: 'pointer',
    ':hover': {
      fill: '#6441a5',
    },
  },

  '&  .MuiBadge-badge': {
    right: '50%',
    top: '75%',
    backgroundColor: '#ffce00',
  },
  '& .thumbdown .MuiBadge-badge ': {
    backgroundColor: '#ff5a00',
  },
});
