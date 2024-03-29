import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

const Navbar = () => {

    const[open,setOpen]=useState(false);

  return (
   <nav className={styles.navbar}>
    <a className={styles.title}>Portfolio</a>
    <div className={styles.menu}>
    <img
          className={styles.menuBtn}
          src={
            open
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          onClick={()=>setOpen(!open)}
          />
        <ul className={`${styles.menuItems} ${open && styles.menuOpen}`} onClick={()=>setOpen(false)}>
            <li>
                <a href="#about">About</a>
            </li>

            <li>
                <a href="#experience">Experience</a>
            </li>

            <li>
                <a href="#projects">Projects</a>
            </li>

        </ul>
    </div>
   </nav>
  )
}

export default Navbar