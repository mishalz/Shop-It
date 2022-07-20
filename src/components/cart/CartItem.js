import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={classes["cart-item"]}>
      <div className={classes.image}>
        <img src={props.image} />

        <div className={classes.summary}>
          <span className={classes.name}>{props.name}</span>
          <span className={classes.price}>${props.price}</span>
        </div>
      </div>

      <div className={classes.actions}>
        <span className={classes.amount}>x {props.quantity}</span>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};
export default CartItem;
