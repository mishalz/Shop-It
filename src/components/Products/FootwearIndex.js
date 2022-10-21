import classes from "./FootwearIndex.module.css";
import useFetch from "../../hooks/useFetch";
import Items from "../assets/Items";

const FootwearIndex = () => {
  const [footwear, isLoading, hasError] = useFetch(
    `https://shop-it-d6e61-default-rtdb.firebaseio.com/footwear.json`
  );
  return (
    <Items
      className={classes.FootwearIndex}
      itemsInfo={{ items: footwear, isLoading, hasError }}
    />
  );
};

export default FootwearIndex;
