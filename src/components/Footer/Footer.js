import React from "react";
import "./Footer.css";
import moment from "moment";

export default class Footer extends React.Component {
  render() {
    const date = moment().toDate();
    return (
      <footer className="content-info">
        Copyright © {moment(date).format("YYYY")} By Chanda Hubbard. All rights
        reserved.
      </footer>
    );
  }
}
