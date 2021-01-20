import React from 'react';
import styled from 'styled-components';

import loading from '_images/loading.gif';

const StyledLoader = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Loader = () => {
  return <StyledLoader src={loading} />;
};
