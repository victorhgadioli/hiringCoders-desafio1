import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <Switch>
      <Route path="/">
        <LandingPage />
      </Route>
    </Switch>
  );
}
