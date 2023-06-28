import { styled } from '@mui/system';

export const StyledContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  alignItems: 'center',
  minHeight: '100vh',

  h2: {
    color: '#9146ff',
  },

  '.streamer-page-container': {
    display: 'flex',
    gap: 50,
    margin: '20px 50px',

    img: {
      borderRadius: '50%',
    },
    p: {
      fontSize: 18,
      lineHeight: 1.5,
    },

    'p.streamer-platform': {
      fontSize: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
    },
    '.MuiBadge-badge': {
      right: '50%',
      top: '150%',
    },
    '>div': {
      display: 'flex',
      flexDirection: 'column',
      '.voting-buttons-container': {
        alignSelf: 'flex-end',
      },
    },
  },
});
