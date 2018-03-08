import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Segment } from "semantic-ui-react";
import axios from "axios";

import SearchItemForm from "../forms/SearchItemForm";
import ItemForm from "../forms/ItemForm";
import { createAnime } from "../../actions/animes";

class NewItemPage extends React.Component {
  state = {
    item: null
  };

  onItemSelect = item => {
    this.setState({ item });
    axios
      .get(`/api/items/fetchPages?idanime=${item.seriesAnimedbId}`)
      .then(res => res.data.pages)
      .then(pages => this.setState({ item: { ...item, pages } }));
  };

  addItem = item =>
    this.props
      .createAnime(item)
      .then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <div>
        <Segment>
          <h1>Add new anime to your collection</h1>

          <SearchItemForm onItemSelect={this.onItemSelect} />

          {this.state.item && (
            <ItemForm
              submit={this.addItem}
              anime={this.state.item}
            />
          )}
        </Segment>
      </div>
    );
  }
}
NewItemPage.propTypes = {
  createAnime: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(null, { createAnime })(NewItemPage);
