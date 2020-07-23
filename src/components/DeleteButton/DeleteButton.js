import React from "react";
import PlantContext from '../../contexts/PlantContext'
import Swal from "sweetalert2";
import PlantService from '../../service/PlantService'


export default class DeleteButton extends React.Component {
  static contextType = PlantContext;

  plantService = new PlantService();

  //need to update context to remove plant from UI

  //context
  delete(id) {
    Swal.fire({
      title: "Are you sure you want to delete this plant from your garden?",
      text: "You won't be able to undo this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        this.plantService.removePlant(id)
        this.context.removePlant(id)
        //update state
        Swal.fire("Deleted!", "Your plant has been deleted.", "success");
      }
    })
  }
  render() {
    return (
      <div className="button-update">
        <button className="myButton red" onClick={() => this.delete(this.props.id)}>
          Delete
        </button>
      </div>
    );
  }
}
