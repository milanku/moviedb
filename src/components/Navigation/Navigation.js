import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import styles from "./style.module.scss";

export default function Navigation() {
  return (
    <Nav className={`flex-column ${styles.navContainer}`}>
      <NavLink
        exact
        to="/"
        className={styles.navItem}
        activeClassName={styles.selected}
      >
        <span>Home</span>
      </NavLink>
      <NavLink
        exact
        to="/favourites"
        className={styles.navItem}
        activeClassName={styles.selected}
      >
        Favourites
      </NavLink>
    </Nav>
  );
}
