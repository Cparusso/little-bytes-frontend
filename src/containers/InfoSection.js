import React, { useState } from "react";
import styled from "styled-components";

import Logo from "../components/Logo";

const InfoSection = ({ theme, subscribed, setSubscribed }) => {
  const [email, setEmail] = useState("");

  return (
    <InfoWrapper theme={theme}>
      <Info>
        <HeaderSection>
          {/* {!subscribed && <Logo />} */}
          <Logo />
          <Header theme={theme}>
            LittleBytes<LanguageTag theme={theme}>. JS</LanguageTag>
            {/* Consider lowercase */}
            {/* Consider removing the logo in lieu of adding styling to this */}
            {/* Play around with the styled component below */}
          </Header>
        </HeaderSection>
        <div>
          {subscribed ? (
            <div>
              <Content theme={theme} className="inner">
                Thanks for subscribing - Your mornings just got a little byter!
              </Content>
              <Content theme={theme} className="inner">
                We're looking forward to helping you get started on your journey
                to learn how to code with javascript.
              </Content>
            </div>
          ) : (
            <>
              <Content theme={theme} className="inner other">
                Mastering Javascript can be hard — take it one{" "}
                <span>Little Byte</span> at a time.
              </Content>
              <Content theme={theme} className="inner">
                Finally, a daily Javascript newsletter filled with top-notch
                morning reads and need-to-know JS fundamentals.
              </Content>
            </>
          )}
        </div>
        {subscribed ? (
          <Content theme={theme}>Your first email is on its way!</Content>
        ) : (
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
        )}
      </Info>
    </InfoWrapper>
  );
};

export default InfoSection;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 55vw;
  background: ${props => (props.theme === "light" ? "white" : "#262725")};
  @media (max-width: 768px) {
    width: 100%;
    height: 400px;
    justify-content: center;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-left: 9%;
  flex-direction: column;
  margin-top: -4%;
  width: 75%;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 15px;
`;

const Header = styled.h1`
  font-size: 50px;
  margin: 0;
  margin-left: 10px;
  margin-bottom: -7px;
  color: ${props => (props.theme === "light" ? "#262725" : "white")};
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

// TESTING THIS ONE OUT
const LanguageTag = styled.span`
  /* Tiny */
  color: #262725;
  font-size: 16px;
  font-weight: 800;

  /* Yellow */
  /* color: #f0db4f;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #323330; */
`;

const Content = styled.h3`
  margin: 0;
  color: ${props => (props.theme === "light" ? "#262725" : "white")};
  &.inner {
    margin: 20px 0;
  }
  &.other {
    background: #2d2d2d;
    padding: 10px;
    color: #fff;
    font-size: 20px;
    border-radius: 2px;

    /* text-transform: uppercase; */
  }
  span {
    color: #ffe644;
  }
`;

const SignUpSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-top: 15px;

  @media (max-width: 768px) {
    font-size: 12px;
    width: 100%;
  }
`;

const Form = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  &.button {
    justify-content: center;
    background: #ffe644;
    color: #262725;
    width: 20%;
    min-width: 60px;
    font-weight: 600;
    padding: 10px;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    font-size: 16px;
    cursor: pointer;
  }
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const EmailField = styled.input`
  background: white;
  padding-left: 2%;
  color: #262725;
  font-size: 16px;
  padding: 10px;
  &:focus {
    outline: none;
  }
  width: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border: none;
`;
