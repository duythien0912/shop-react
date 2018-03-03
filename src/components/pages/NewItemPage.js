import React from "react";
import { Segment } from "semantic-ui-react";

import SearchItemForm from "../forms/SearchItemForm";
import ItemForm from "../forms/ItemForm";

class NewItemPage extends React.Component {
  state = {
    item: null
  };

  onItemSelect = item => this.setState({ item });

  addItem = () => {
    console.log("hi");
  };

  render() {
    return (
      <div>
        <Segment>
          <SearchItemForm onItemSelect={this.onItemSelect} />

          {this.state.item && (
            <ItemForm submit={this.addItem} item={this.state.item} />
          )}
        </Segment>
      </div>
    );
  }
}

export default NewItemPage;
