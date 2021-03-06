import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import ResetPasswordPage from "./components/pages/ResetPasswordPage";
import ResetPasswordOkPage from "./components/pages/ResetPasswordOkPage";
import DashBoardPage from "./components/pages/DashBoardPage";
import ConfirmationPage from "./components/pages/ConfirmationPage";
import NewItemPage from "./components/pages/NewItemPage";

import UserRoute from "./components/routers/UserRouter";
import GuestRoute from "./components/routers/GuestRoute";

import TopNavigation from "./components/navigation/TopNavigation";
import BottomNavigation from "./components/navigation/BottomNavigation";

import HomePageContainer from "./components/container/HomePageContainer";

const App = ({ location }) => (
  <div>
    <TopNavigation />
    <div>
      <Route
        location={location}
        path="/"
        exact
        component={HomePageContainer}
      />
      <Route
        location={location}
        path="/testhome"
        exact
        component={HomePage}
      />
      <Route
        location={location}
        path="/confirmation/:token"
        exact
        component={ConfirmationPage}
      />
      <GuestRoute
        location={location}
        path="/login"
        exact
        component={LoginPage}
      />
      <GuestRoute
        location={location}
        path="/signup"
        exact
        component={SignupPage}
      />
      <GuestRoute
        location={location}
        path="/reset_password"
        exact
        component={ResetPasswordPage}
      />
      <GuestRoute
        location={location}
        path="/reset_password_ok/:token"
        exact
        component={ResetPasswordOkPage}
      />
      <UserRoute
        location={location}
        path="/dashboard"
        exact
        component={DashBoardPage}
      />
      <UserRoute
        location={location}
        path="/item/new"
        exact
        component={NewItemPage}
      />
    </div>
    <BottomNavigation />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};
export default App;
