import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";

const DashboardPage = ({ isConfirmed }) => (
  <div>
    <div className="ui visible inverted left vertical sidebar menu">
      <a className="item">
        <i className="home icon" />
        Home
      </a>
      <a className="item">
        <i className="block layout icon" />
        Topics
      </a>
      <a className="item">
        <i className="smile icon" />
        Friends
      </a>
      <a className="item">
        <i className="calendar icon" />
        History
      </a>
    </div>
    <div />

    {!isConfirmed && <ConfirmEmailMessage />}
  </div>
);

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed
  };
}

export default connect(mapStateToProps)(DashboardPage);
