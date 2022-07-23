import classes from "./NavbarCartIcon.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const NavbarCartIcon = (props) => {
  const cartCount = useSelector((state) => state.cart.totalQuantity);
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
  const cartBadgeClasses = `${classes["cart-icon__badge"]} ${
    buttonIsHighlighted ? classes.bump : ""
  }`;
  useEffect(() => {
    setButtonIsHighlighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCount]);
  return (
    <div className={classes["cart-icon"]} onClick={props.onOpenCart}>
      <i className="fa fa-shopping-cart"></i>
      <div className={cartBadgeClasses}>
        <p>{cartCount}</p>
      </div>
    </div>
  );
};

export default NavbarCartIcon;
