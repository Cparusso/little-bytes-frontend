import React from "react";
import styled from "styled-components";
// import { logo } from "../assets/logo";

const Logo = ({ nav }) => {
  return <LogoImage className={nav && "nav"} src="LBLogo.svg" />;
};

export default Logo;

const LogoImage = styled.img`
  width: 55px;

  &.nav {
    width: 40px;
  }
`;
