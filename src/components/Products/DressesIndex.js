import Items from "../assets/Items";
import useFetch from "../../hooks/useFetch";
import classes from "./DressesIndex.module.css";

const DressesIndex = () => {
  const [dresses, isLoading, hasError] = useFetch(
    `https://shop-it-d6e61-default-rtdb.firebaseio.com/dresses.json`
  );

  return (
    <Items
      className={classes.DressesIndex}
      itemsInfo={{ items: dresses, isLoading, hasError }}
    />
  );
};

export default DressesIndex;
