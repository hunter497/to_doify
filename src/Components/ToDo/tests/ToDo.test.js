import React from "react";
import ReactDOM from "react-dom";
import ToDo from "../index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ToDo params={{ title: "test" }} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
