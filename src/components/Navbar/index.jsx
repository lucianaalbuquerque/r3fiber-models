import React from 'react'
import styles from './navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <a href="/">BluePlanet</a>
      <ul>
        <li><a href='/about'>About</a></li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar