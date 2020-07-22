import React from "react";
import { Link } from "react-router-dom";
import PlantCard from "../PlantCard/PlantCard";
import PlantContext from "../../contexts/PlantContext";

export default class ViewGardenPage extends React.Component {
  static contextType = PlantContext;

  render() {
    const { garden } = this.context;
    return (
      <div className="top">
        <section>
          <h1>Hello</h1>
          <p>Welcome to your garden</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
            id interdum velit laoreet id donec ultrices tincidunt arcu. Amet
            risus nullam eget felis eget nunc lobortis mattis. Viverra ipsum
            nunc aliquet bibendum enim. In vitae turpis massa sed. Dolor sed
            viverra ipsum nunc aliquet bibendum enim. Viverra accumsan in nisl
            nisi.
          </p>
          <p></p>
          {/* conditionally render later */}
          <section className="card-container">
            <div className="ui container comments">
              {garden.map((item) => (
                <PlantCard garden={item} />
              ))}
            </div>
          </section>

          <Link to="/add">
            <button className="myButton green">Add A Plant</button>
          </Link>
        </section>
      </div>
    );
  }
}
