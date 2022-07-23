import classes from "./NavbarCartIcon.module.css";
import { useSelector } from "react-redux";

const NavbarCartIcon = (props) => {
  const cartCount = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className={classes["cart-icon"]} onClick={props.onOpenCart}>
      <i className="fa fa-shopping-cart"></i>
      <div className={classes["cart-icon__badge"]}>
        <p>{cartCount}</p>
      </div>
    </div>
  );
};

export default NavbarCartIcon;
