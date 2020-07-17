import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import PlantCarePage from "./PlantCarePage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <PlantCarePage />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
