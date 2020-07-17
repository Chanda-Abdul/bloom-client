import React from "react";

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <section>
        <div>
          <h2>Sorry, page not found!</h2>
          <p>
            Oops, the page does not exist. Try going back or using the
            navigation menu
          </p>

          {/* <img className="notfound" src={notfound} alt="404"/> */}
          <section id="hero-footer" />
        </div>
      </section>
    );
  }
}
