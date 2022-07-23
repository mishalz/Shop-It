
import useFetch from "../../hooks/useFetch";
import Order from "./Order";
import Layout from "../ui/Layout";
const OrdersHistory = () => {
  const [orders] = useFetch(
    `${process.env.REACT_APP_FIREBASE_BASE_URL}orders.json`
  );
  const myorders = orders.filter(
    (order) => order.email === "mishal.zulfiqar2911@gmail.com"
  );

  return (
    <Layout>
      {myorders.reverse().map((order, index) => (
        <Order order={order} key={order.id} index={index} />
      ))}
    </Layout>
  );
};
export default OrdersHistory;
