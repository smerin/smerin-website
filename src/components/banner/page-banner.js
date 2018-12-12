import React from "react";
import Img from "gatsby-image";
import style from "./banner.module.scss";

const PageBanner = ({ title, subtitle, image }) => {
  return (
    <div className={style.banner}>
      {image && (
        <div className={style.bannerImage}>
          <Img fluid={image.childImageSharp.fluid} />
        </div>
      )}
      <div className="container">
        <div className={style.bannerContent}>
          <div>
            <h2 className={style.bannerTitle}>{title}</h2>
            {subtitle && <p className={style.bannerSubtitle}>{subtitle}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
