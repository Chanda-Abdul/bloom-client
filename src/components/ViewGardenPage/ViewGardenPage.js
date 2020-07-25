import React from "react";
import { Link } from "react-router-dom";
import PlantCard from "../PlantCard/PlantCard";
import PlantContext from "../../contexts/PlantContext";
import cacti from "../../images/cacti.png";
import plant2 from "../../images/plant2.png";
import './ViewGardenPage.css'

export default class ViewGardenPage extends React.Component {
  static contextType = PlantContext;

  render() {
    const { garden } = this.context;
    return (
      <div className="top">
        <section className="garden-heading">
          <h1>Hello...</h1>
          
          <p>Welcome to your garden!</p>
          <img src={cacti} alt={cacti} width="150rem"/>
          <p>
            All of the plants that are currently in your garden are listed
            below.
          </p>
          <p>
            Click the 'Delete' button on any plant to remove it from your garden
          </p>
          <p>
            Click the 'More Info' button to view more indoor gardening tips.
          </p>
          <img src={plant2} alt={plant2} width="150rem"/>
          <br/>
          <p>Add another plant to your garden here</p>
          <br/>
          
          <Link to="/add">
            <button className="myButton green">Add A Plant</button>
          </Link>
          <br/>
          <br/>
          </section>
          <div className="garden-section">
            <section className="container-garden">
              {garden.map((item) => (
                <PlantCard garden={item} key={item.id} />
              ))}
            </section>
            </div>
            
          <br/>
          <br/>
          <br/>
          <br/>
      </div>
      
    );
  }
}
