import React from 'react';
import { Link } from 'gatsby';
import styles from './navigation.module.scss';

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/music/">Music</Link>
      </li>
      <li>
        <Link to="/digital/">Digital</Link>
      </li>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
      <li>
        <Link to="/contact/">Contact</Link>
      </li>
    </ul>
  </nav>
);
