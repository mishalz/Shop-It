import classes from "./Order.module.css";
const Order = (props) => {
  const orderDate = new Date(props.order.orderDate);
  const year = orderDate.getFullYear();
  const month = orderDate.getMonth();
  const date = orderDate.getDate();
  const formattedDate = `${date}/${month}/${year}`;
  return (
    <div>
      <div className={classes.title}>
        <h1>Order {props.index + 1}</h1>
      </div>
      <div className={classes["order-details"]}>
        <ul className={classes["order-item"]}>
          {props.order.orderItems.map((order) => (
            <li key={order.id}>
              <div className={classes.image}>
                <img src={order.image} alt={`a ${props.type}`} />

                <div className={classes.summary}>
                  <span className={classes.name}>{order.articleName}</span>
                  <span className={classes.price}>${order.price}</span>
                  <p>x{order.quantity}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className={classes["order-info"]}>
          <span className={classes.label}>Order placed on:</span>{" "}
          <span>{formattedDate}</span>
          <p>
            <span className={classes.label}>Total Price:</span> $
            {props.order.orderTotalPrice}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Order;
