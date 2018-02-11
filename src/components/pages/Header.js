import React from "react";
import { Flag } from "semantic-ui-react";

const componentName = () => (
  <div className="ui borderless main menu">
    <div className="ui text container">
      <div href="#0" className="header item">
        Project Name
      </div>
      <a href="#0" className="item">
        Blog
      </a>
      <a href="#0" className="item">
        Articles
      </a>
      <a href="#0" className="ui right floated dropdown item">
        Dropdown <i className="dropdown icon" />
        <div className="menu">
          <div className="item">Link Item</div>
          <div className="item">Link Item</div>
          <div className="divider" />
          <div className="header">Header Item</div>
          <div className="item">
            <i className="dropdown icon" />
            Sub Menu
            <div className="menu">
              <div className="item">Link Item</div>
              <div className="item">Link Item</div>
            </div>
          </div>
          <div className="item">Link Item</div>
        </div>
      </a>
      <a href="#0" className="item">
        <Flag name="vn" />
      </a>
    </div>
  </div>
);

export default componentName;
