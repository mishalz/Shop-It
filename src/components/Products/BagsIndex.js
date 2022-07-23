import Items from "../assets/Items";
import classes from "./BagsIndex.module.css";
import useFetch from "../../hooks/useFetch";

const BagsIndex = () => {
  const [bags, isLoading, hasError] = useFetch(
    `${process.env.REACT_APP_FIREBASE_BASE_URL}bags.json`
  );

  return (
    <Items
      className={classes.BagsIndex}
      itemsInfo={{ items: bags, isLoading, hasError }}
    />
  );
};

export default BagsIndex;
