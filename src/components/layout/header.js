import React from "react";
import { Link } from "gatsby";
import MainMenu from "./main-menu";
import MobileMenu from "./mobile-menu";
import styles from "./header.module.scss";

const Header = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "Music", path: "/music" },
    { title: "Digital", path: "/digital" },
    { title: "Contact", path: "/contact" }
  ];

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.headerLogo}>
            <Link to="/">
              <img
                src="/gs-logo.png"
                alt="George Smerin"
                width="170"
                height="170"
              />
            </Link>
          </div>
          <MainMenu links={links} />
        </div>
      </div>
      <MobileMenu links={links} />
    </header>
  );
};

export default Header;
