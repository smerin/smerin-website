import React from "react";
import { Link } from "gatsby";
import { slide as Menu } from "react-burger-menu";
import base from "../../styles/base.scss";
import Header from "./header";
import { menuItems } from "../../utils/menuItems";

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    let header;

    let rootPath = "/";
    if (typeof __PREFIX_PATHS__ !== "undefined" && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + "/";
    }

    return (
      <div>
        <Menu right>
          {menuItems.map((item, index) => (
            <Link key={index} to={item.path}>
              {item.title}
            </Link>
          ))}
        </Menu>
        <Header />
        {children}
      </div>
    );
  }
}

export default Template;
