import React from "react";

const Hamburger = props => {
  return (
    <div
      className={"navbar-burger " + (props.menuOpen ? "is-active" : "")}
      onClick={props.toggle}
    >
      <span />
      <span />
      <span />
    </div>
  );
};

export default Hamburger;
