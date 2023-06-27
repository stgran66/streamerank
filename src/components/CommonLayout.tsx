import { Outlet } from 'react-router-dom';
import { Paper } from '@mui/material';
import { StyledHeader, StyledHomeLink } from './CommonLayout.styled';
import { FaHome } from 'react-icons/fa';
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
