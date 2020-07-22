import React from "react";
import Swal from "sweetalert2";

export default class DeleteButton extends React.Component {
  delete() {
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
        Swal.fire("Deleted!", "Your plant has been deleted.", "success");
      }
    });
  }
  render() {
    return (
      <div className="button-update">
        <button className="myButton red" onClick={this.delete}>
          Delete
        </button>
      </div>
    );
  }
}
