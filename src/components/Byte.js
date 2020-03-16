import React from "react";
import styled from "styled-components";

const Byte = ({ cta, issueNum, date }) => {
  return (
    <ByteWrapper>
      <ContentWrapper>
        <CallToAction>{cta}</CallToAction>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex...
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
  width: 65%;
  border-radius: 6px;
  padding: 30px;
  box-shadow: 0px 5px 8px -2px rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    width: 80%;
    height: 100px;
    padding-top: 10px;
    margin-bottom: 30px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media (max-width: 768px) {
    height: 80px;
    width: 55%;
    border-bottom: 3px solid #262725;
  }
`;

const CallToAction = styled.h2`
  margin: 0;
  height: 50px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    align-items: baseline;
    font-size: 18px;
  }
`;

const Content = styled.p`
  margin: 0;
  height: 100px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const IssueInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 17%;
  background: #ffe644;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  @media (max-width: 768px) {
    height: 90px;
    width: 70px;
    padding: 0 10px;
  }
`;

const IssueInfoRight = styled.h1`
  margin: 0;
  @media (max-width: 768px) {
    text-align: center;
  }
  &.top {
    font-size: 24px;
    font-weight: 800;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  &.middle {
    font-size: 50px;
    font-weight: 800;
    @media (max-width: 768px) {
      font-size: 25px;
    }
  }
  &.bottom {
    font-size: 16px;
    font-weight: 400;
    font-style: italic;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;
