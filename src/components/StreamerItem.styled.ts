import { styled } from '@mui/system';

export const StyledStreamerItem = styled('li')({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px 30px',

  img: {
    width: 50,
    height: 50,
    borderRadius: '50%',
  },

  div: {
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
  },
});
