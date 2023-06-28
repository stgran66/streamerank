import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled('header')({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  margin: 0,
  padding: 30,

  backgroundColor: ' #9146ff',

  h1: {
    margin: 0,

    fontFamily: 'Pacifico',
    color: '#ff5a00',

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
