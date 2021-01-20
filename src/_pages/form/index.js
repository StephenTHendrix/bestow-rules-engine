import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '_constants';
import { dateRegExp, rulesEngine } from '_utils';
import { states } from './states';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.brand};
  color: white;
  height: 500px;
  width: 500px;
`;

const Text = styled.div`
  width: 80%;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

const StyledInput = styled.input`
  width: 100%;
  margin: 20px;
  padding: 10px;
`;

const Button = styled.div`
  background-color: ${({ disabled }) => (disabled ? colors.yellow : 'white')};
  cursor: ${({ disabled }) => !disabled && 'pointer'};
  height: 50px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.gray};
`;

const ErrorText = styled.span`
  color: ${colors.yellow};
  width: 100%;
  min-height: 25px;
`;

const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 200px;
  color: ${({ isQualififed }) => (isQualififed ? 'white' : colors.yellow)};
  min-height: 25px;
  background-color: ${({ clicked }) => clicked && colors.table};
  margin-top: 10px;
  text-align: center;
`;

export const Form = () => {
  const [state, setState] = useState('');
  const [birthday, setBirthday] = useState('');
  const [clicked, setClicked] = useState(false);
  const [isQualified, setIsQualified] = useState(null);

  const validState = states.includes(state.toUpperCase());
  const validBirthday = dateRegExp.test(birthday);

  const disabled = !validState || !validBirthday;

  const getResults = () => {
    if (!disabled) {
      setClicked(true);
      setIsQualified(rulesEngine(state, birthday));
    }
  };

  return (
    // <Container>
    <>
      <Content>
        <Text>Enter your information to see if you&apos;re qualified!</Text>
        <InputContainer>
          <StyledInput
            placeholder={'State ("TX")'}
            value={state}
            onChange={(event) => setState(event.target.value)}
          />
          <ErrorText>
            {state && !validState && 'Please use a valid state ("TX")'}
          </ErrorText>
          <StyledInput
            placeholder="Birthday (MM/DD/YYYY)"
            value={birthday}
            onChange={(event) => setBirthday(event.target.value)}
          />
          <ErrorText>
            {birthday &&
              !validBirthday &&
              'Please use a valid date ("MM/DD/YYYY")'}
          </ErrorText>
        </InputContainer>
        <Button disabled={disabled} onClick={getResults}>
          Verify
        </Button>
      </Content>
      <Result isQualififed={isQualified} clicked={clicked}>
        {clicked &&
          (isQualified
            ? "Congratulations! You're qualififed!"
            : "We're sorry, but you don't seem to meet the qualifications.")}
      </Result>
      {/* </Container> */}
    </>
  );
};
