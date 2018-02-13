import React from "react";
import { Flag } from "semantic-ui-react";

const componentName = () => (
  <div className="ui borderless main menu">
    <div className="ui text container">
      <a href="/">
        <div href="/" className="header item">
          Project Name
        </div>
      </a>
      <a href="/shop" className="item">
        Shop
      </a>
      <a href="/dashboard" className="item">
        Dash Board
      </a>

      <a href="/login" className="ui right floated item">
        Login/Logout
      </a>
      <a href="#0" className="item">
        <Flag name="vn" />
      </a>
    </div>
  </div>
);

export default componentName;
