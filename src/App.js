import React, { useState } from "react";
import LandingPage from "./containers/LandingPage";
import AdminPage from "./containers/adminPage/AdminPage";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";

function App() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      <Route exact path={"/"} component={LandingPage} />
      <Route path="/admin" component={AdminPage} />
      {/* {subscribed && <NavBar />} */}
      {/* <LandingPage subscribed={subscribed} setSubscribed={setSubscribed} /> */}
    </>
  );
}

export default App;
