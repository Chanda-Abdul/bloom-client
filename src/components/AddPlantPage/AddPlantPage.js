import React from "react";
import "./AddPlantPage.css";
import Swal from "sweetalert2";
import PlantContext from "../../contexts/PlantContext";
import PlantService from '../../service/PlantService'
import ViewGardenButton from '../ViewGardenButton/ViewGardenButton'

export default class AddPlantPage extends React.Component {
  static contextType = PlantContext;

  //Is this neccesary?
  state = {
    plant_name: "",
    scientic_name: "",
    details: "",
    plant_type: "",
    maintence_level: 1,
    water_requirements: 1,
    light_conditions: 1,
    image_url: "",
  };

  constructor(props) {
    super(props);
    this.plantService = new PlantService();
  }


  onInputChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (event, plantId) => {
    event.preventDefault();
    const newPlant = {
      plant_name: this.state.plant_name,
      scientic_name: this.state.scientic_name,
      details: this.state.details,
      plant_type: this.state.plant_type,
      maintence_level: this.state.maintence_level,
      water_requirements: this.state.water_requirements,
      light_conditions: this.state.light_conditions,
      image_url: this.state.image_url,
    };
    this.plantService
      .createNewPlant(newPlant)
      .then((expenses) => {
        this.context.setExpenses(expenses);
      })
      .catch((err) => {
        console.log(err, "error on createExpense");
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
    const { garden } = this.context;
    console.log(garden, "viewgardenpage");
    return (
      <div>
        <section>
          <h1>Add a plant to your garden</h1>
          <p>Type information below to add a plant to your garden:</p>
          <form>
            <fieldset>
              <legend>Add Plant</legend>
              <h3>information about how to add a plant</h3>
              <label htmlFor="">Plant Name:</label>
              <input
                placeholder="plant name"
                name="plantName"
                type="text"
                value=""
                className="input__control"
                //   onChange={this.onInputChange}
              />
              <br />
              <label htmlFor="">Scientific Name:</label>
              <input
                placeholder="scientific name"
                name="scientificName"
                type="text"
                value=""
                className="input__control"
                //   onChange={this.onInputChange}
              />
              <br />
              <label htmlFor="">Details:</label>
              <input
                placeholder="plant details"
                name="plantDetails"
                type="text"
                value=""
                className="input__control"
                //   onChange={this.onInputChange}
              />
              <br />
              <label htmlFor="">Plant Type:</label>
              <input
                placeholder="Plant Type(optional)"
                name="plantType"
                type="text"
                value=""
                className="input__control"
                //   onChange={this.onInputChange}
              />
              <br />
              <label htmlFor="">Maintence Level:</label>
              {/* dropdown with options from the API */}
              <input
                placeholder="****"
                name="plantMaintence"
                type="text"
                value=""
                className="input__control"
                //   onChange={this.onInputChange}
              />
              <br />
              <label htmlFor="">Water Requirements:</label>
              <input
                placeholder="****"
                name="plantWater"
                type="text"
                value=""
                className="input__control"
                //   onChange={this.onInputChange}
              /><br />
              <label htmlFor="">Light Conditions:</label>
              <input
                placeholder="****"
                name="plantLight"
                type="text"
                value=""
                className="input__control"
                //   onChange={this.onInputChange}
              />
              <br />
              <label htmlFor="">Add an Image:</label>
              <input
                placeholder="http://www.plant.image.com/coolplant.jpg"
                name="plantImage"
                type="text"
                value=""
                className="input__control"
                //   onChange={this.onInputChange}
              />
              <br />
            </fieldset>
            <button
              className="myButton"
              type="submit"
              onClick={this.addPlantAlert}
            >Add Plant!</button> <ViewGardenButton/>
          </form>
        </section>
      </div>
    );
  }
}
