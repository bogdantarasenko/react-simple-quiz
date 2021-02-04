import React from "react";
import classes from "./Layout.module.css";

const Layout = ({ children }) => (
  <div className={classes.Layout}>
    <main>{children}</main>
  </div>
)

export default Layout;
