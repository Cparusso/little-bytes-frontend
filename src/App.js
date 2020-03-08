import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import LandingPage from "./containers/LandingPage";
import NavBar from "./components/NavBar";

function App() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <Router>
      {subscribed && <NavBar />}
      <LandingPage subscribed={subscribed} setSubscribed={setSubscribed} />
    </Router>
  );
}

export default App;
