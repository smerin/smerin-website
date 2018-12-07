import React from 'react';
import style from './banner.module.scss';

const PageBanner = ({ title }) => {
  return (
    <div className={style.banner}>
      <p>{title}</p>
    </div>
  );
}

export default PageBanner;