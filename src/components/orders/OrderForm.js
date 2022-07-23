import Modal from "../Layout/UI/Modal";
import classes from "./OrderForm.module.css";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../store/CartSlice";

const OrderForm = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const dispatch = useDispatch();
  const nameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();

  const backToCartHandler = () => {
    props.onCloseForm();
    props.onCloseCart();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const order = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      address: addressRef.current.value,
      orderItems: cartItems,
      orderTotalPrice: totalPrice,
      orderDate: new Date(),
    };
    setOrderPlaced(true);

    fetch(`${process.env.REACT_APP_FIREBASE_BASE_URL}/orders.json`, {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(clearCart());
  };

  return (
    <Modal onClose={props.onCloseForm}>
      <section className={classes.order}>
        {!orderPlaced && (
          <>
            <h1>Order Details</h1>
            <form onSubmit={submitHandler}>
              <div className={classes.control}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" ref={nameRef} />
              </div>
              <div className={classes.control}>
                <label htmlFor="email">email</label>
                <input id="email" type="text" ref={emailRef} />
              </div>
              <div className={classes.control}>
                <label htmlFor="address">address</label>
                <input id="address" type="text" ref={addressRef} />
              </div>
              <div className={classes.actions}>
                <button type="button" onClick={backToCartHandler}>
                  <i className="fa fa-solid fa-arrow-left" /> Back to cart
                </button>
                <button>Confirm order</button>
              </div>
            </form>
          </>
        )}
        {orderPlaced && <h1>Your order has been placed.</h1>}
      </section>
    </Modal>
  );
};
export default OrderForm;
