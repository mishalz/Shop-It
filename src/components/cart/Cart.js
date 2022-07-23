import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, clearCart } from "../../store/CartSlice";
import CartItem from "./CartItem";
import Modal from "../Layout/UI/Modal";
import classes from "./Cart.module.css";
import { useNavigate } from "react-router-dom";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const removeItemFromCartHandler = (id) => {
    dispatch(decrement({ id }));
  };
  const addItemFromCartHandler = (item) => {
    dispatch(increment({ item }));
  };

  const submitOrderHandler = () => {
    navigate("/place-order");
    props.onOpenForm();
    props.onCloseCart();
  };
  return (
    <Modal onClose={props.onCloseCart}>
      <ul className={classes["cart-items"]}>
        <div className={classes["cart-container"]}>
          {cartItems.length === 0 && <p>No items in the cart.</p>}
          {cartItems.map((item) => (
            <CartItem
              name={item.articleName}
              type={item.type}
              image={item.image}
              price={item.price}
              quantity={item.quantity}
              key={item.id}
              onRemove={removeItemFromCartHandler.bind(null, item.id)}
              onAdd={addItemFromCartHandler.bind(null, item)}
            />
          ))}
        </div>
      </ul>
      <div className={classes.totalprice}>Total: ${totalPrice}</div>
      <div className={classes.actions}>
        <button onClick={props.onCloseCart}>Cancel</button>
        <button
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear Cart
        </button>
        <button disabled={cartItems.length === 0} onClick={submitOrderHandler}>
          Submit order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
