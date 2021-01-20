import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '_constants';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.brand};
  color: white;
  height: 200px;
  width: 200px;
`;

const Button = styled(Link)`
  background-color: ${colors.pink};
  color: white;
  height: 75px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Home = () => {
  return (
    <>
      <Content>Life Insurance Verification</Content>
      <Button to="/form">Get Started</Button>
    </>
  );
};
