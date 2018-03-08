import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card, Image, Icon } from "semantic-ui-react";

import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import { allItemSelector } from "../../reducers/items";
import { fetchAnimes } from "../../actions/animes";

class DashboardPage extends React.Component {
  state = { visible: false };

  componentDidMount = () => this.onInit(this.props);

  onInit = props => props.fetchAnimes();
  toggleVisibility = () =>
    this.setState({ visible: !this.state.visible });

  render() {
    const { isConfirmed, items } = this.props;
    return (
      <div>
        {!isConfirmed && <ConfirmEmailMessage />}
        <Card.Group centered>
          {items.length === 0 ? (
            <p>abc</p>
          ) : (
            items.map(item => (
              <Card key={item._id}>
                <Image src={item.seriesImage} />
                <Card.Content>
                  <Card.Header>{item.seriesTitle}</Card.Header>
                  <Card.Meta>
                    <span className="date">{item.seriesStatus}</span>
                  </Card.Meta>
                  <Card.Description>
                    {item.seriesSynonyms}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="video" />
                    Ep: {item.seriesEpisodes}
                  </a>
                </Card.Content>
              </Card>
            ))
          )}
        </Card.Group>
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
