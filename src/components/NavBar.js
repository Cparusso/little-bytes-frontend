import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Logo from "../components/Logo";

const NavBar = ({ theme }) => {
  return (
    <Nav>
      <LeftSide>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Logo />
          <Header>
            {/* littleBytes<LanguageTag>.JS</LanguageTag> */}
            {/* Consider lowercase */}
            {/* Consider removing the logo in lieu of adding styling to this */}
            {/* Play around with the styled component below */}
          </Header>
        </Link>
      </LeftSide>
      <RightSide>
        <NavLink
          to="archive"
          style={{ textDecoration: "none", color: "white" }}
        >
          All Bytes
        </NavLink>
        <NavLink
          to="contribute"
          style={{ textDecoration: "none", color: "white" }}
        >
          Contribute
        </NavLink>
        <NavLink to="about" style={{ textDecoration: "none", color: "white" }}>
          About Us
        </NavLink>
      </RightSide>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.div`
  height: 8vh;
  background: #262725;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 95px 10px 55px;
  color: white;
  @media (max-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const LeftSide = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: 30vw;
`;

const Header = styled.h1`
  font-size: 32px;
  margin: 0;
  color: ${props => (props.theme === "light" ? "#323330" : "white")};
`;

// TESTING THIS ONE OUT
// const LanguageTag = styled.span`
/* Tiny */
/* color: #323330; */
// font-size: 16px;
// font-weight: 800;

/* Yellow */
/* color: #f0db4f;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #323330; */
// `;

const RightSide = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30vw;
  font-weight: 600;
  font-size: 18px;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }
`;
