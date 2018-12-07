import React from 'react'
import { Link } from 'gatsby'
import Navigation from './navigation'
import styles from './header.module.scss'

const Header = () => (
  <header className={styles.header}>
    <div className="container">
      <div className={styles.headerContent}>
        <div className={styles.headerLogo}>
          <Link to="/">
            <img src="/gs-logo.png" alt="George Smerin" width="170" height="170" />
          </Link>
        </div>
        <Navigation />
      </div>
    </div>
  </header>
)

export default Header;