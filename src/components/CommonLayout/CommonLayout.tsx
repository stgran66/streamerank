import { Outlet } from 'react-router-dom';
import { Paper } from '@mui/material';
import { FaHome } from 'react-icons/fa';

import { StyledHeader, StyledHomeLink } from './CommonLayout.styled';

export const CommonLayout = () => {
  return (
    <Paper>
      <StyledHeader>
        <h1>
          Streame<span>Rank</span>
        </h1>
        <StyledHomeLink to='/'>
          <FaHome size={32} />
        </StyledHomeLink>
      </StyledHeader>
      <Outlet />
    </Paper>
  );
};
