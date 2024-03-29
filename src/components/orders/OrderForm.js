import Modal from "../ui/Modal";
import classes from "./OrderForm.module.css";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../store/CartSlice";

const OrderForm = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
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
    if (
      nameRef.current.value &&
      addressRef.current.value &&
      emailRef.current.value
    ) {
      const order = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        address: addressRef.current.value,
        orderItems: cartItems,
        orderTotalPrice: totalPrice,
        orderDate: new Date(),
      };
      setOrderPlaced(true);

      fetch(`https://shop-it-d6e61-default-rtdb.firebaseio.com/orders.json`, {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setErrorMessage("Fill all fields please.");
      dispatch(clearCart());
    } else {
      setErrorMessage("Fill all fields please.");
    }
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
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
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
