import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "./components/pages/Header";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashBoardPage from "./components/pages/DashBoardPage";
import Footer from "./components/pages/Footer";
import UserRoute from "./components/routers/UserRouter";
import GuestRoute from "./components/routers/GuestRoute";

const App = ({ location }) => (
  <div>
    <Route path="/*" exact component={Header} />
    <div className="ui text container">
      <Route location={location} path="/" exact component={HomePage} />
      <GuestRoute
        location={location}
        path="/login"
        exact
        component={LoginPage}
      />
      <UserRoute
        location={location}
        path="/dashboard"
        exact
        component={DashBoardPage}
      />
    </div>
    <br />
    <Route path="/*" exact component={Footer} />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};
export default App;
