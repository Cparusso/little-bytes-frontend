import React from "react";
import styled from "styled-components";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return <Button theme={theme} onClick={toggleTheme} />;
};

export default ThemeToggle;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 100px;
  position: fixed;
  bottom: 2%;
  right: 1.2%;
  /* background: ${props => (props.theme === "light" ? "#323330" : "white")}; */
  background: #f0db4f;
  border: 1px solid #ffffff50;
  cursor: pointer
`;
