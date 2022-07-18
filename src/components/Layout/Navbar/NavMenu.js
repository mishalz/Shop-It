import classes from "./NavMenu.module.css";
import { NavLink } from "react-router-dom";

const NavMenu = (props) => {
  return (
    <div className={`${classes.menu} ${props.className}`}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        onClick={props.onClick}
      >
        Home
      </NavLink>
      <NavLink
        to="/bags"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        onClick={props.onClick}
      >
        Bags
      </NavLink>
      <NavLink
        to="/dresses"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        onClick={props.onClick}
      >
        Dresses
      </NavLink>
      <NavLink
        to="/footwear"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        onClick={props.onClick}
      >
        Footwear
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        onClick={props.onClick}
      >
        <i className="fa fa-user-circle"></i>
      </NavLink>
    </div>
  );
};

export default NavMenu;
