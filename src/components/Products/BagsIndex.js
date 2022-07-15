import Index from "../assets/Index";
import classes from "./BagsIndex.module.css";
import useFetch from "../../hooks/useFetch";

const BagsIndex = () => {
  const [bags, isLoading, hasError] = useFetch(
    "https://shop-it-d6e61-default-rtdb.firebaseio.com/bags.json"
  );

  return (
    <Index
      className={classes.BagsIndex}
      items={bags}
      isLoading={isLoading}
      hasError={hasError}
    />
  );
};

export default BagsIndex;
