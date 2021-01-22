import React, { useState } from "react";

import classes from "./Layout.css";

import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const layout = (props) => {
  const [showSideDrawer, setshowSideDrawer] = useState(false);
  const sideDrawerHandler = () => {
    setshowSideDrawer(!showSideDrawer);
  };
  return (
    <Aux>
      <Toolbar show={sideDrawerHandler} />
      <SideDrawer show={showSideDrawer} drawerHandler={sideDrawerHandler} />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
