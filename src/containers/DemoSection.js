import React from "react";
import styled from "styled-components";

const DemoSection = () => {
  return (
    <DemoWrapper>
      <Phone>
        <Notch />
        <PhoneButton className="left top" />
        <PhoneButton className="left bottom" />
        <PhoneButton className="right" />
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
  background: #f0db4f;
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
`;

const Notch = styled.div`
  width: 50%;
  height: 20px;
  background: black;
  z-index: 1;
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
`;

const PhoneButton = styled.div`
  position: absolute;
  background: black;
  /* z-index: 1; */
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
    height: 90px;
    right: -2px;
    top: 135px;
    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;
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
