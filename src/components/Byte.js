import React from "react";
import styled from "styled-components";

const Byte = ({ cta, issueNum, date }) => {
  return (
    <ByteWrapper>
      <ContentWrapper>
        <CallToAction>
          <h2>{cta}</h2>
        </CallToAction>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Content>
      </ContentWrapper>
      <IssueInfo>
        <IssueInfoRight className="top">Issue no.</IssueInfoRight>
        <IssueInfoRight className="middle">{issueNum}</IssueInfoRight>
        <IssueInfoRight className="bottom">{date}</IssueInfoRight>
      </IssueInfo>
    </ByteWrapper>
  );
};

export default Byte;

const ByteWrapper = styled.div`
  display: flex;
  height: 30%;
  width: 65vw;
  border-radius: 2px;
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 2px solid #32333020;
  padding: 30px;
  box-shadow: 0px 3px 8px -4px rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: space-around;
`;

const CallToAction = styled.div`
  margin: 0;
  height: 50px;
  display: flex;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const Content = styled.p`
  margin: 0;
`;

const IssueInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 17%;
  background: #f0db4f;
  align-items: center;
  justify-content: center;
  border: 2px solid #323330;
  border-radius: 2px;
`;

const IssueInfoRight = styled.h1`
  margin: 0;
  &.top {
    font-size: 24px;
    font-weight: 800;
  }
  &.middle {
    font-size: 50px;
    font-weight: 800;
  }
  &.bottom {
    font-size: 16px;
    font-weight: 400;
    font-style: italic;
  }
`;
