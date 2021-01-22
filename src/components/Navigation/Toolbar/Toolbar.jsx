import React from "react";

import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import SideDrawerToggler from "../SideDrawer/SideDrawerToggler/SideDrawerToggler";

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <SideDrawerToggler show={props.show} />
      <Logo />
      <nav>
        <div className={classes.DesktopOnly}>
          <NavigationItems />
        </div>
      </nav>
    </header>
  );
};

export default toolbar;
