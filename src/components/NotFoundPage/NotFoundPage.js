import React from "react";
import notfound from "../../images/notfound.png";

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <section className="landing-heading">
        <div>
          <h2>Sorry, page not found!</h2>
          <p>
            Oops, the page does not exist. Try going back or using the
            navigation menu
          </p>

          <img src={notfound} alt="404" width="300rem"/>
          <section id="hero-footer" />
        </div>
      </section>
    );
  }
}
