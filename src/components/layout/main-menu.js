import React from "react";
import { Link } from "gatsby";
import styles from "./main-menu.module.scss";

const MainMenu = ({ links }) => (
  <nav role="navigation">
    <ul className={styles.mainMenu}>
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.path}>{link.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default MainMenu;
