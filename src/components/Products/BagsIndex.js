import Items from "../assets/Items";
import classes from "./BagsIndex.module.css";
import useFetch from "../../hooks/useFetch";

const BagsIndex = () => {
  const [bags, isLoading, hasError] = useFetch(
    `https://shop-it-d6e61-default-rtdb.firebaseio.com/bags.json`
  );

  return (
    <Items
      className={classes.BagsIndex}
      itemsInfo={{ items: bags, isLoading, hasError }}
    />
  );
};

export default BagsIndex;
