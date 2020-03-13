import React from "react";
import styled from "styled-components";

const DemoSection = () => {
  return (
    <DemoWrapper>
      <Phone className="case">
        <Notch className="case" />
        <PhoneButton className="left top case" />
        <PhoneButton className="left bottom case" />
        <PhoneButton className="right case" />
        <PhoneScreen>
          <EmailScreen className="top" src="gmail-top.JPG" />
          <EmailScreen className="bottom" src="gmail-content.JPG" />
        </PhoneScreen>
      </Phone>
    </DemoWrapper>
  );
};

export default DemoSection;

const DemoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffe644;
  width: 45vw;
`;

const Phone = styled.div`
  position: absolute;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 550px;
  width: 300px;
  border-radius: 3em;
  &.case {
    background: #262725;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.8);
  }
`;

const Notch = styled.div`
  width: 50%;
  height: 22px;
  background: black;
  z-index: 1;
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
  &.case {
    background: #262725;
  }
`;

const PhoneButton = styled.div`
  position: absolute;
  background: black;
  &.left {
    width: 20px;
    height: 60px;
    left: -2px;
    border-top-left-radius: 1em;
    border-bottom-left-radius: 1em;
    &.top {
      top: 120px;
    }
    &.bottom {
      top: 180px;
    }
  }
  &.right {
    width: 20px;
    height: 100px;
    right: -2px;
    top: 135px;
    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;
  }
  &.case {
    background: #262725;
    z-index: 0;
  }
`;

const PhoneScreen = styled.div`
  background: white;
  z-index: 0;
  height: 95%;
  width: 90%;
  border-radius: 2em;
  margin-top: -20px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const EmailScreen = styled.img`
  width: 100%;
  &.top {
    position: absolute;
    width: 270px;
    border-top-left-radius: 2em;
    border-top-right-radius: 2em;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);
  }
  &.bottom {
    margin-top: 80px;
  }
`;
