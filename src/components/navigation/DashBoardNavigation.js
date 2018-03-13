import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class DashBoardNavigation extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div style={{ "margin-bottom": "5vh" }}>
        <Menu pointing secondary stackable>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="activity"
            active={activeItem === "activity"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="my event"
            active={activeItem === "my event"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="followers"
            active={activeItem === "followers"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="following"
            active={activeItem === "following"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="promote"
            active={activeItem === "promote"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="my profile"
              active={activeItem === "my profile"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
