import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Form, Dropdown } from "semantic-ui-react";

class SearchItemForm extends React.Component {
  state = {
    query: "",
    loading: false,
    options: [],
    items: {}
  };

  onSearchChange = (e, data) => {
    clearTimeout(this.timer);
    this.setState({ query: data.searchQuery });
    this.timer = setTimeout(this.fetchOptions, 1000);
  };

  onChange = (e, data) => {
    this.setState({ query: data.value });
    this.props.onItemSelect(this.state.items[data.value]);
  };

  fetchOptions = () => {
    if (!this.state.query) return;
    this.setState({ loading: true });
    axios
      .get(`/api/items/search?q=${this.state.query}`)
      .then(res => res.data.items)
      .then(items => {
        const options = [];
        const itemsHash = {};
        items.forEach(item => {
          itemsHash[item.albumId] = item;
          options.push({
            key: item.albumId,
            value: item.albumId,
            text: item.title
          });
        });
        this.setState({ loading: false, options, items: itemsHash });
      });
  };

  render() {
    return (
      <div>
        <Form>
          <Dropdown
            search
            fluid
            placeholder="Search Item by title"
            value={this.state.query}
            onSearchChange={this.onSearchChange}
            options={this.state.options}
            loading={this.state.loading}
            onChange={this.onChange}
          />
        </Form>
      </div>
    );
  }
}

SearchItemForm.propTypes = {
  onItemSelect: PropTypes.func.isRequired
};

export default SearchItemForm;
