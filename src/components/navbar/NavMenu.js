import classes from "./NavMenu.module.css";
import NavbarCartIcon from "./NavbarCartIcon";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/AuthSlice";
import { clearCart } from "../../store/CartSlice";

const NavMenu = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.isLoggedIn);

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div className={classes.NavMenu}>
      <div className={classes.navBarDropdown}>
        <i id={classes.navbarToggle} className={`$ fa fa-solid fa-bars`}></i>
        <div className={classes["public-links"]}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            onClick={props.onClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/bags"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            onClick={props.onClick}
          >
            Bags
          </NavLink>
          <NavLink
            to="/dresses"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            onClick={props.onClick}
          >
            Dresses
          </NavLink>
          <NavLink
            to="/footwear"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            onClick={props.onClick}
          >
            Footwear
          </NavLink>
        </div>
      </div>

      {<NavbarCartIcon onOpenCart={props.onOpenCart} />}

      <div className={classes.dropdown}>
        {!authStatus && (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Login
          </NavLink>
        )}
        {authStatus && (
          <i className={`fa fa-user-circle ${classes.dropdownOpt}`}></i>
        )}

        <div className={classes["dropdown-content"]}>
          {authStatus && (
            <NavLink
              to="/my-orders"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              My orders
            </NavLink>
          )}

          {authStatus && (
            <span className={classes.logout} onClick={logoutHandler}>
              Logout
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
