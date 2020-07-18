import React from "react";
import { Link } from "react-router-dom";
import InfoButton from "../InfoButton/InfoButton";
import DeleteButton from "../DeleteButton/DeleteButton";

const PlantCard = (props) => {
  console.log(props.children, "plant card - props.children");
  return (
    <div className="card-container">
      <div className="card">
        <img
          src="https://picsum.photos/600/500/?random"
          alt="Random"
          class="card-img"
        />
        <div className="card-body">
          <h3>Plant Name: {props.children}</h3>
          <p>Details: {props.children}</p>
          <p>Rating: {props.children}</p>
          <p>Care Info: {props.children}</p>
          <p></p>
          <InfoButton />
          <DeleteButton />
        </div>
      </div>
      {/* <div className="ui card">
        <div className="content">{props.children}</div>
        <div className="extra content">
            <div className="ui two buttons">
                <InfoButton/>
                <DeleteButton/>
            </div>
        </div>
    </div> */}
    </div>
  );
};

export default PlantCard;
