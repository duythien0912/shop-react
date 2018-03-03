import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Icon } from "semantic-ui-react";

import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";

const DashboardPage = ({ isConfirmed }) => (
  <div>
    {!isConfirmed && <ConfirmEmailMessage />}
    {isConfirmed && (
      <div>
        <Card centered>
          <Card.Content textAlign="center">
            <Card.Header>Add new Item</Card.Header>
            <Link to="/item/new">
              <Icon name="plus circle" size="massive" />
            </Link>
          </Card.Content>
        </Card>
      </div>
    )}
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
