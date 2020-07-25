import React from "react";
import PlantContext from "../../contexts/PlantContext";
import InfoButton from "../InfoButton/InfoButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import "./PlantCard.css";

class PlantCard extends React.Component {
  static contextType = PlantContext;

  render() {
    const { garden } = this.props;
    return (
      <div className="card">
        <div className="plant-header">
          <h2>{garden.plant_name}</h2>
        </div>
        <div className="plant-info">
          <div className="plant-image">
            <img src={garden.image_url} alt={garden.plant_name} />
            <div className="plant-stats">
              <ul>
                <li>
                  <b>Scientific Name: </b>
                  <br />
                  {garden.scientific_name}
                </li>
                <br />
                <li>
                  <b>Maintenance Level: </b>
                  <br />
                  {garden.maintenance}
                </li>
                <br />
                <li>
                  <b>Water: </b>
                  <br />
                  {garden.water}
                </li>
                <br />
                <li>
                  <b>Light Conditions: </b>
                  <br />
                  {garden.light}
                </li>
                <br />
                <li>
                  <b>Plant Type: </b>
                  <br />
                  {garden.plant_type}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="plant-details">
          <p>{garden.details}</p>
        </div>
        <div className="gardenbutton">
          <DeleteButton id={garden.id} />
          <InfoButton />
          <div className="plant-footer"></div>
        </div>
      </div>
    );
  }
}

export default PlantCard;
