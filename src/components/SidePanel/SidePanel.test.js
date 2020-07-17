import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import SidePanel from "./SidePanel";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <SidePanel/>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
