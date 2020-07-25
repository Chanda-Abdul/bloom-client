import React from "react";
import { Link } from "react-router-dom";

export default class ViewGardenButton extends React.Component {
  render() {
    return (
      <div className="button-update">
        <Link to="/information">
          <button className="myButton-green">More info</button>
        </Link>
      </div>
    );
  }
}
