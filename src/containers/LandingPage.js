import React, { useState } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import InfoSection from "./InfoSection";
import DemoSection from "./DemoSection";
import Archive from "./Archive";
import Contribute from "./Contribute";
import About from "./About";
import ThemeToggle from "../components/ThemeToggle";

const LandingPage = ({ subscribed, setSubscribed }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <MainWrapper subscribed={subscribed}>
      <Switch>
        <Route exact path="/">
          <InfoSection
            theme={theme}
            subscribed={subscribed}
            setSubscribed={setSubscribed}
          />
          <DemoSection />
        </Route>
        <Route path="/archive">
          <Archive />
        </Route>
        <Route path="/contribute">
          <Contribute />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </MainWrapper>
  );
};

export default LandingPage;

const MainWrapper = styled.div`
  display: flex;
  height: ${props => (props.subscribed ? "89vh" : "100vh")};
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;
