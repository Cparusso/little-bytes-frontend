import React from "react";
import styled from "styled-components";
import { logo } from "../assets/logo";

const Logo = () => {
  return <LogoImage>{logo}</LogoImage>;
};

export default Logo;

const LogoImage = styled.h2`
  font-size: 24px;
  font-family: monospace;
  color: #323330;
  margin: 0;
  margin-right: 10px;
  border-radius: 4px;
  svg {
    margin-bottom: -2.5px;
  }

  /* background: -webkit-linear-gradient(90deg, #fff 45%, #ffe644 45%);
  background: -o-linear-gradient(90deg, #fff 45%, #ffe644 45%);
  background: -moz-linear-gradient(90deg, #fff 45%, #ffe644 45%);
  background: linear-gradient(90deg, #fff 45%, #ffe644 45%); */
`;
