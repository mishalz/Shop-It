import { useSelector } from "react-redux";
import { increment, decrement } from "../../store/CartSlice";
import { useDispatch } from "react-redux";
import CartItem from "./CartItem";
import Modal from "../Layout/UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  const removeItemFromCartHandler = (id) => {
    dispatch(decrement({ id }));
  };
  const addItemFromCartHandler = (item) => {
    dispatch(increment({ item }));
  };

  return (
    <Modal onClose={props.onCloseCart}>
      <ul className={classes["cart-items"]}>
        {cartItems.length === 0 && <p>No items in the cart.</p>}
        {cartItems.map((item) => (
          <CartItem
            name={item.articleName}
            image={item.image}
            price={item.price}
            quantity={item.quantity}
            key={item.id}
            onRemove={removeItemFromCartHandler.bind(null, item.id)}
            onAdd={addItemFromCartHandler.bind(null, item)}
          />
        ))}
      </ul>
      <div className={classes.totalprice}>Total: ${totalPrice}</div>
      <div className={classes.actions}>
        <button onClick={props.onCloseCart}>Cancel</button>
        <button disabled={cartItems.length === 0}>Submit order</button>
      </div>
    </Modal>
  );
};

export default Cart;
