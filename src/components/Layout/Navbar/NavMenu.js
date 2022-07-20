import classes from "./NavMenu.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const NavMenu = (props) => {
  const cartCount = useSelector((state) => state.cart.totalQuantity);

  return (
    <>
      <div className={`${classes.menu} ${props.className}`}>
        <div className={classes["cart-icon"]} onClick={props.onOpenCart}>
          <i className="fa fa-shopping-cart"></i>
          <div className={classes["cart-icon__badge"]}>
            <p>{cartCount}</p>
          </div>
        </div>
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
          to="/login"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          onClick={props.onClick}
        >
          Login
        </NavLink>
        <NavLink
          to="/logout"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          onClick={props.onClick}
        >
          Logout
        </NavLink>
        <NavLink
          to="/edit-profile"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          onClick={props.onClick}
        >
          Change password
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          onClick={props.onClick}
        >
          My orders
        </NavLink>
        <div className={classes.dropdown} onClick={props.onOpenDropdown}>
          <i className="fa fa-user-circle"></i>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
