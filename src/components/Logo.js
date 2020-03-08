import React from "react";
import styled from "styled-components";

const Logo = () => {
  return <LogoImage>LB</LogoImage>;
};

export default Logo;

const LogoImage = styled.h2`
  display: flex;
  font-size: 28px;
  align-items: flex-end;
  justify-content: flex-end;
  color: #323330;
  background: #f0db4f;
  margin: 0;
  height: 55px;
  width: 49px;
  padding-right: 6px;
  margin-right: 10px;
  border-radius: 2px;
`;
