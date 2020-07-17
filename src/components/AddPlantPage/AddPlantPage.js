import React from "react";
import "./AddPlantPage.css";
import Swal from "sweetalert2";
import PlantContext from "../../contexts/PlantContext";
import ViewGardenButton from '../ViewGardenButton/ViewGardenButton'

export default class AddPlantPage extends React.Component {
  static contextType = PlantContext;

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
              <label htmlFor="">Rating:</label>
              <input
                placeholder="plant rating"
                name="plantRating"
                type="text"
                value=""
                className="input__control"
                //   onChange={this.onInputChange}
              />
              <br />
              <label htmlFor="">Care Info:</label>
              <input
                placeholder="plant care"
                name="plantCare"
                type="text"
                value=""
                className="input__control"
                //   onChange={this.onInputChange}
              />
              <br />
              <label htmlFor="">Add an Image:</label>
              <input
                placeholder="plant image"
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
