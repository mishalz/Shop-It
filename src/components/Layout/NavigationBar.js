import { NavLink } from "react-router-dom";
import classes from "./NavigationBar.module.css";
import "font-awesome/css/font-awesome.min.css";

const NavigationBar = () => {
  return (
    <div className={classes["flex-container"]}>
      <div className={classes.title}>
        <h1>Shop It</h1>
        <i className="fa fa-paw"></i>
      </div>
      <div className={classes["inner-flex-container"]}>
        <NavLink
          to="/bags"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Bags
        </NavLink>
        <NavLink
          to="/dresses"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Dresses
        </NavLink>
        <NavLink
          to="/footwear"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Footwear
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Login
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Logout
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          <i className="fa fa-user-circle"></i>
        </NavLink>
      </div>
    </div>
  );
};

export default NavigationBar;
