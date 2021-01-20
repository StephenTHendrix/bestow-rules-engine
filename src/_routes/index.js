import React from 'react';
import {
  Switch,
  Redirect,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import styled from 'styled-components';

import { GlobalStyles } from '../globalStyles';
import { Home, Form } from '_pages';
import { Navbar } from '_components';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Routes = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/form" component={Form} />
            <Redirect to="/" />
          </Switch>
        </Container>
      </Router>
    </>
  );
};
