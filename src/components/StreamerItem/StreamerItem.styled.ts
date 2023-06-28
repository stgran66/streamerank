import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

export const StyledStreamerItem = styled('li')({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px 50px',

  backgroundColor: 'rgba(57, 46, 92, 0.7)',
  color: 'white',

  ':nth-of-type(even)': {
    backgroundColor: 'rgba(100, 65, 165, 0.7)',
  },

  img: {
    width: 50,
    height: 50,
    borderRadius: '50%',
  },
});

export const StyledLink = styled(NavLink)({
  display: 'flex',
  gap: 20,

  textDecoration: 'none',
  color: 'white',

  p: {
    display: 'flex',
    gap: 10,
  },

  ':hover': {
    color: '#6441a5',
  },
});
