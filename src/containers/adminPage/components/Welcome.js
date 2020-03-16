import React from "react";
import styled from "styled-components";

import Login from "./Login";

const Welcome = () => {
  return (
    <WelcomeWrapper>
      <WelcomeSide></WelcomeSide>
      <Login />
    </WelcomeWrapper>
  );
};

export default Welcome;

const WelcomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const WelcomeSide = styled.div`
  height: 100%;
  background: blue;
  width: 100%;
`;
