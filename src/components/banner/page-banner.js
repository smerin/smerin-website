import React from "react";
import style from "./banner.module.scss";

const PageBanner = ({ title, subtitle }) => {
  return (
    <div className={style.banner}>
      <div className={style.bannerContent}>
        <h2 className={style.bannerTitle}>{title}</h2>
        {subtitle && <p className={style.bannerSubtitle}>{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageBanner;
