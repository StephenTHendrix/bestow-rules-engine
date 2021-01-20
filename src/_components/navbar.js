import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '_constants';

const StyledNavbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  background-color: ${colors.brand};
  height: 60px;
`;

const StyledLink = styled(Link)`
  margin: 0 5px;
`;

export const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/form">Get Verified</StyledLink>
    </StyledNavbar>
  );
};
