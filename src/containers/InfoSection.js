import React, { useState } from "react";
import styled from "styled-components";

import Logo from "../components/Logo";

const InfoSectionm = ({ theme, subscribed, setSubscribed }) => {
  const [email, setEmail] = useState("");

  console.log(email);

  return (
    <InfoWrapper theme={theme}>
      <Info>
        <HeaderSection>
          <Logo />
          <Header theme={theme}>
            littleBytes<LanguageTag theme={theme}>.JS</LanguageTag>
            {/* Consider lowercase */}
            {/* Consider removing the logo in lieu of adding styling to this */}
            {/* Play around with the styled component below */}
          </Header>
        </HeaderSection>
        <Content>
          {subscribed ? (
            <>
              <Content theme={theme} className="inner">
                Thanks for subscribing - Your mornings just got a little byter!
              </Content>
              <Content theme={theme} className="inner">
                We're looking forward to helping you get started on your journey
                to learn how to code with javascript.
              </Content>
            </>
          ) : (
            <>
              <Content theme={theme} className="inner">
                A byte-sized daily dose of JavaScript sent directly to your
                email
              </Content>
              <Content theme={theme} className="inner">
                The easist way to learn the fundamentals of JavaScript on your
                morning commute
              </Content>
            </>
          )}
        </Content>
        <SignUpSection>
          <EmailField
            placeholder="Please enter your email..."
            type="text"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <Form onClick={() => setSubscribed(true)} className="button">
            Sign Up
          </Form>
        </SignUpSection>
      </Info>
    </InfoWrapper>
  );
};

export default InfoSectionm;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 55vw;
  background: ${props => (props.theme === "light" ? "white" : "#323330")};
`;

const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-left: 9%;
  flex-direction: column;
  margin-top: -4%;
  width: 75%;
  height: 50%;
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
`;

const Header = styled.h1`
  font-size: 50px;
  margin: 0;
  color: ${props => (props.theme === "light" ? "#323330" : "white")};
`;

// TESTING THIS ONE OUT
const LanguageTag = styled.span`
  /* Tiny */
  color: #323330;
  font-size: 16px;
  font-weight: 800;

  /* Yellow */
  /* color: #f0db4f;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #323330; */
`;

const Content = styled.h3`
  margin: 0;
  color: ${props => (props.theme === "light" ? "#323330" : "white")};
  &.inner {
    margin: 10px 0;
  }
`;

const SignUpSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const Form = styled.div`
  display: flex;
  align-items: center;
  border-radius: 2px;
  height: 40px;
  &.button {
    justify-content: center;
    background: #f0db4f;
    color: #323330;
    width: 20%;
    min-width: 60px;
    font-weight: 600;
  }
`;

const EmailField = styled.input`
  background: white;
  padding-left: 2%;
  color: #323330;
  width: 75%;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;
