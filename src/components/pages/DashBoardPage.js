import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Button, Image, Icon } from "semantic-ui-react";

import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import { allItemSelector } from "../../reducers/items";
import { fetchAnimes } from "../../actions/animes";

class DashboardPage extends React.Component {
  componentDidMount = () => this.onInit(this.props);

  onInit = props => props.fetchAnimes();

  render() {
    const { isConfirmed, items } = this.props;
    return (
      <div>
        {!isConfirmed && <ConfirmEmailMessage />}
        {isConfirmed && (
          <div>
            <Card>
              <Card.Content textAlign="center">
                <Link to="/item/new">
                  {/* <Icon name="add circle" size="big" /> */}
                  <Button basic color="green">
                    Add new Item
                  </Button>
                </Link>
              </Card.Content>
            </Card>
          </div>
        )}
        {items.length === 0 ? (
          <p>abc</p>
        ) : (
          <Card>
            <Image src={items.map(i => i.seriesImage)} />
            <Card.Content>
              <Card.Header>
                {items.map(i => i.seriesTitle)}
              </Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        )}
      </div>
    );
  }
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      seriesTitle: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    items: allItemSelector(state)
  };
}

export default connect(mapStateToProps, { fetchAnimes })(
  DashboardPage
);
