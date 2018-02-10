import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/pages/Header";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import Footer from "./components/pages/Footer";

const App = () => (
  <div>
    <Route path="/*" exact component={Header} />
    <div className="ui text container">
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
    </div>
    <Route path="/*" exact component={Footer} />
  </div>
);

export default App;
