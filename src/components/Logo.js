import React from "react";
import styled from "styled-components";

const Logo = () => {
  return <LogoImage>LB</LogoImage>;
};

export default Logo;

const LogoImage = styled.h2`
  display: flex;
  font-size: 18px;
  align-items: flex-end;
  justify-content: flex-end;
  color: #323330;
  background: #ffe644;
  margin: 0;
  height: 55px;
  width: 49px;
  padding-right: 6px;
  margin-right: 10px;
  border-radius: 4px;
  /* background: -webkit-linear-gradient(90deg, #fff 45%, #ffe644 45%);
  background: -o-linear-gradient(90deg, #fff 45%, #ffe644 45%);
  background: -moz-linear-gradient(90deg, #fff 45%, #ffe644 45%);
  background: linear-gradient(90deg, #fff 45%, #ffe644 45%); */
`;
