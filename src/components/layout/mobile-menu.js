import React, { Component } from "react";
import { Link } from "gatsby";
import styles from "./mobile-menu.module.scss";

class MobileMenu extends Component {
  state = {
    showMenu: false
  };

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  render() {
    const { links } = this.props;

    return (
      <>
        <button
          type="button"
          className={styles.mobileMenuToggle}
          onClick={this.toggleMenu}
        >
          Menu
        </button>
        {this.state.showMenu && (
          <ul className={styles.mobileMenu}>
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default MobileMenu;
