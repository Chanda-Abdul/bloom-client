import React from "react";
import "./AddPlantPage.css";
import Swal from "sweetalert2";
import PlantContext from "../../contexts/PlantContext";
import PlantService from "../../service/PlantService";
import ViewGardenButton from "../ViewGardenButton/ViewGardenButton";

export default class AddPlantPage extends React.Component {
  static contextType = PlantContext;

  state = {
    plant_name: "",
    scientific_name: "",
    details: "",
    plant_type: "",
    maintenance_level: 1,
    water_requirements: 1,
    light_conditions: 1,
    image_url: "",
  };

  constructor(props) {
    super(props);
    this.plantService = new PlantService();
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (event, plantId) => {
    event.preventDefault();
    const newPlant = {
      plant_name: this.state.plant_name,
      scientific_name: this.state.scientific_name,
      details: this.state.details,
      plant_type: this.state.plant_type,
      maintenance_level: this.state.maintenance_level,
      water_requirements: this.state.water_requirements,
      light_conditions: this.state.light_conditions,
      image_url: this.state.image_url,
    };
   
    this.plantService
      .createNewPlant(newPlant)
      .then((plant) => {
        console.log(newPlant, "new Plant")
        this.context.setPlant(plant);
      })
      .catch((err) => {
        console.log(err, "error on createPlant");
      });
  };

  addPlantAlert() {
    Swal.fire({
      title: "Plant has been added to your garden!",
      icon: "success",
      button: "Aww yiss!",
    });
  }


  render() {
    return (
      <div>
        <section>
          <h1>Add a plant to your garden</h1>
          <h4>Enter information below to add a plant to your garden</h4>
          <div className="">
            <form
              className="add-plant-form"
              onSubmit={(e) => this.handleSubmit(e)}
            >
              <fieldset name="plant-form">
                <legend>Add Plant: </legend>
                <p>
                  Just enter the plant name, scientific name, and details,
                  maintenance and image of the new plant to add it to your garden
                </p>
                <div className="input-form-group">
                  <label htmlFor="">Plant Name:</label>
                  <input
                    placeholder="insert plant name here"
                    name="plant_name"
                    type="text"
                    value={this.state.plant_name}
                    className="input__control"
                    onChange={this.onInputChange}
                    required
                  />
                  <br />
                  <label htmlFor="">Scientific Name:</label>
                  <input
                    placeholder="insert scientific name here"
                    name="scientific_name"
                    type="text"
                    value={this.state.scientific_name}
                    className="input__control"
                    onChange={this.onInputChange}
                    required
                  />
                  <br />
                  <label htmlFor="">Details:</label>
                  <input
                    placeholder="insert plant details here"
                    name="details"
                    type="text"
                    value={this.state.details}
                    className="input__control"
                    onChange={this.onInputChange}
                    required
                  />
                  <br />
                  <label htmlFor="">Plant Type:</label>
                  <input
                    placeholder="Plant Type(optional)"
                    name="plant_type"
                    type="text"
                    value={this.state.plant_type}
                    className="input__control"
                    onChange={this.onInputChange}
                  />
                  <br />
                  <label htmlFor="">maintenance Level:</label>
                  <select
                    defaultValue={this.state.maintenance_level}
                    name="maintenance_level"
                    className="input__control"
                    onChange={this.onInputChange}
                    required
                  >
                    <option value="1">No-fuss — Carefree</option>
                    <option value="2">Easy — Relatively low maintenance</option>
                    <option value="3">Moderate</option>
                    <option value="4">
                      High maintenance — and requires a bit of special care
                    </option>
                  </select>
                  <br />
                  <label htmlFor="">Water Requirements:</label>
                  <select
                    defaultValue={this.state.water_requirements}
                    name="water_requirements"
                    className="input__control"
                    onChange={this.onInputChange}
                    required
                  >
                    <option value="1">Very High</option>
                    <option value="2">High</option>
                    <option value="3">Moderate</option>
                    <option value="4">Low Water</option>
                    <option value="5">Dry, Extremely Low Water</option>
                  </select>
                  <br />
                  <label htmlFor="">Light Conditions:</label>
                  <select
                    defaultValue={this.state.light_conditions}
                    name="light_conditions"
                    className="input__control"
                    onChange={this.onInputChange}
                    required
                  >
                    <option value="1">Low to Partial</option>
                    <option value="2">Medium Indirect Light</option>
                    <option value="3">Bright Light</option>
                    <option value="4">Full Sun</option>
                  </select>
                  <br />
                  <label htmlFor="">Add an Image:</label>
                  <input
                  //add default image
                    placeholder="http://www.plant.image.com/coolplant.jpg"
                    value={this.state.image_url}
                    name="image_url"
                    type="text"
                    className="input__control"
                    onChange={this.onInputChange}
                  />
                  <br />
                </div>
              </fieldset>
              <button
                className="myButton"
                type="submit"
                onClick={this.addPlantAlert}
              >
                Add Plant!
              </button>
              <ViewGardenButton />
            </form>
          </div>
        </section>
      </div>
    );
  }
}
