import React from "react";
import styles from "../../styles/components/navbar.scss";

export interface NavbarProps {
  title: string,

}

export const Navbar = () => {

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navItems}>
        <a href="#" className={styles.navBrand}>Navbar</a>
        <li className={styles.navItem}>Home</li>
        <li className={styles.navItem}>Menu</li>
        <li className={styles.navItem}>Home</li>
        <li className={styles.navItem}>Menu</li>
      </ul>
    </nav>
  );
}