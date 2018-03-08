import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Flag, Dropdown, Image } from "semantic-ui-react";
import gravatar from "gravatar-url";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";

const TopNavigation = ({ isAuthenticated, logout, user }) => (
  <div>
    <div className="ui menu">
      <div className="item">
        <Link to="/" className="header item">
          Project Name
        </Link>
      </div>
      <div className="item">
        <Link to="/shop" className="item">
          Shop
        </Link>
      </div>
      <div className="item">
        <Link to="/dashboard" className="item">
          Dash Board
        </Link>
      </div>
      <div className="right menu">
        {isAuthenticated ? (
          <div className="item">
            <Dropdown
              trigger={<Image avatar src={gravatar(user.email)} />}
            >
              <Dropdown.Menu>
                <Dropdown.Item
                  className="ui secondary basic button"
                  onClick={() => logout()}
                >
                  <div className="item">Logout</div>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/dashboard" className="item">
                    Dash Board
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        ) : (
          <div className="item">
            <div className="item">
              <div className="ui primary basic button">
                <Link to="/login">Login</Link>
              </div>
            </div>

            <div className="item">
              <div className="ui positive basic button">
                <Link to="/signup">Sign Up</Link>
              </div>
            </div>
          </div>
        )}

        <a className="item">
          <Flag name="vn" />
        </a>
      </div>
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
