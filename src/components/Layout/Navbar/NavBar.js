import classes from "./NavBar.module.css";
import "font-awesome/css/font-awesome.min.css";
import { useState } from "react";
import NavMenu from "./NavMenu";

const NavigationBar = () => {
  const [navbarToggle, setNavbarToggle] = useState(false);

  const toggleHandler = () => {
    setNavbarToggle((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarToggle(false);
  };

  return (
    <header>
      <div className={classes.Navbar}>
        <div className={classes["Navbar__title"]}>
          <h1>Shop It</h1>
          <i className="fa fa-paw"></i>
        </div>

        <NavMenu className={classes["Navbar__menu"]} />

        <a className={classes["Navbar__toggleIcon"]} onClick={toggleHandler}>
          <i className="fa fa-solid fa-bars"></i>
        </a>

        {navbarToggle && (
          <NavMenu
            className={classes["Navbar__toggleMenu"]}
            onClick={closeMenu}
          />
        )}
      </div>
    </header>
  );
};

export default NavigationBar;
