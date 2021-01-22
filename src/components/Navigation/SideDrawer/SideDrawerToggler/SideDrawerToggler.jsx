import React from "react";

import classes from "./SideDrawerToggle.css";

const sideDrawerToggler = (props) => {
  return (
    <div className={classes.DrawerToggle} onClick={props.show}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default sideDrawerToggler;
