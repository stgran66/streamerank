import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled('header')({
  backgroundColor: ' #9146ff',
  margin: 0,
  padding: 30,
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',

  h1: {
    margin: 0,
    color: '#ff5a00',
    fontFamily: 'Pacifico',

    span: {
      color: '#ffce00',
    },
  },
});

export const StyledHomeLink = styled(NavLink)({
  width: 32,
  height: 32,
  color: '#ffce00',

  ':hover': {
    color: '#ff5a00',
  },
});
