import React from "react";
import "./AddPlantPage.css";
import Swal from "sweetalert2";
import PlantContext from "../../contexts/PlantContext";
import PlantService from "../../service/PlantService";
import ViewGardenButton from "../ViewGardenButton/ViewGardenButton";
import plant9 from "../../images/plant9.png";
import shelf from "../../images/shelf.png";

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
    image_url:
      "https://images.assetsdelivery.com/compings_v2/morphart/morphart1910/morphart191008681.jpg",
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
    console.log(this.state, "this.state");
    this.plantService
      .createNewPlant(this.state)
      .then((plant) => {
        this.addPlantAlert(
          "success",
          "Plant has been added to your garden!",
          "Aww yiss!"
        );
        this.context.setPlant(plant);
      })
      .catch((err) => {
        this.addPlantAlert("error", "Plant couldn't be added!", "cancel");
      });
  };

  addPlantAlert(icon, message, buttonText) {
    Swal.fire({
      title: message,
      icon,
      button: buttonText,
    });
  }

  render() {
    return (
      <div>
        <section className="create-heading">
          <h1>Add a plant to your garden</h1>
          <img src={plant9} alt={plant9} width="200rem" />
          <h4>Enter information below to add a plant to your garden</h4>
          <div className="plant-input">
            <form
              className="add-plant-form"
              onSubmit={(e) => this.handleSubmit(e)}
            >
              <fieldset name="plant-form">
                <legend>Add Plant: </legend>
                <p>
                  Just enter the plant name, scientific name, and details,
                  maintenance and image of the new plant to add it to your
                  garden
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
                  <label htmlFor="">Maintenance Level:</label>
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
                    placeholder="add image url here"
                    value={this.state.image_url}
                    name="image_url"
                    type="text"
                    className="input__control"
                    onChange={this.onInputChange}
                  />
                  <br />
                </div>
              </fieldset>
              <button className="myButton" type="submit">
                Add Plant!
              </button>
              <ViewGardenButton />
            </form>
            <img src={shelf} alt={shelf} width="300rem" />
          </div>
        </section>
      </div>
    );
  }
}
