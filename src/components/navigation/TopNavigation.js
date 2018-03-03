import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Flag, Dropdown, Image } from "semantic-ui-react";
import gravatar from "gravatar-url";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";

const TopNavigation = ({ isAuthenticated, logout, user }) => (
  <div className="ui borderless main menu">
    <div className="ui text container">
      <Link to="/" className="header item">
        Project Name
      </Link>
      <Link to="/shop" className="item">
        Shop
      </Link>

      <Link to="/dashboard" className="item">
        Dash Board
      </Link>
      <a className="ui right floated item">
        {isAuthenticated ? (
          <Dropdown trigger={<Image avatar src={gravatar(user.email)} />}>
            <Dropdown.Menu>
              <Dropdown.Item
                className="ui secondary basic button"
                onClick={() => logout()}
              >
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <div>
            <Link to="/login">Login</Link> -or-
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </a>
      <a href="#0" className="item">
        <Flag name="vn" />
      </a>
    </div>
  </div>
);

TopNavigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  }).isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token,
    user: state.user
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(
  TopNavigation
);
