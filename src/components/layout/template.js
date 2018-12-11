import React from "react";
import { Link } from "gatsby";
import base from "../styles/base.scss";
import Header from "./header";

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
        <Header />
        {children}
      </div>
    );
  }
}

export default Template;
