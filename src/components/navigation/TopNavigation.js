import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Flag, Dropdown, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";

const TopNavigation = ({ isAuthenticated, logout, user }) => (
  <div>
    {isAuthenticated ? (
      <div className="ui menu stackable">
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
        <div className="right item">
          {isAuthenticated && (
            <Link to="/item/new">
              {/* <Icon name="add circle" size="big" /> */}
              <Button basic color="green">
                Add new Item
              </Button>
            </Link>
          )}
        </div>
        {isAuthenticated ? (
          <div className="item">
            <Dropdown trigger={<p>{user.email}</p>}>
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
              <Link to="/login">
                <div className="ui primary basic button">Login</div>
              </Link>
            </div>

            <div className="item">
              <Link to="/signup">
                <div className="ui positive basic button">
                  Sign Up
                </div>
              </Link>
            </div>
          </div>
        )}

        <a className="item">
          <Flag name="vn" />
        </a>
      </div>
    ) : (
      <div />
    )}
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
