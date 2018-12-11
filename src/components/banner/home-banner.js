import React from 'react';
import { Link } from 'gatsby';
import style from './banner.module.scss';

const HomeBanner = () => {
  return (
    <div className={style.banner}>
      <div className={style.bannerContent}>
        <h1>Hello, I'm George Smerin!</h1>
        <p>
          I'm a <Link to="/music">musician</Link> and{' '}
          <Link to="digital">web developer</Link> from Bristol, UK.
        </p>
      </div>
    </div>
  );
};

export default HomeBanner;
