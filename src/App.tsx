import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Store from "./pages/store";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/store">
        <Store />
      </Route>
    </Switch>
  );
};

export default App;
