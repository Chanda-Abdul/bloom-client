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
          <h1>Hello...</h1>
          <p>Welcome to your garden!</p>
          <p>
            All of the plants that are currently in your garden are listed
            below.
          </p>
          <p>
            Click the 'delete' button on any plant to remove it from your garden
          </p>
          <p>
            Click the 'More Info' button to view more indoor gardening tips.
          </p>

          <p>Add another plant to your garden here</p>
          <Link to="/add">
            <button className="myButton green">Add A Plant</button>
          </Link>

          <section className="card-container">
            <div className="ui container details">
              {garden.map((item) => (
                <PlantCard garden={item} key={item.id} />
              ))}
            </div>
          </section>
        </section>
      </div>
    );
  }
}
