import Index from "../assets/Index";
import useFetch from "../../hooks/useFetch";
import classes from "./DressesIndex.module.css";

const DressesIndex = () => {
  const [dresses, isLoading, hasError] = useFetch(
    "https://shop-it-d6e61-default-rtdb.firebaseio.com/dresses.json"
  );

  return (
    <Index
      className={classes.DressesIndex}
      items={dresses}
      isLoading={isLoading}
      hasError={hasError}
    />
  );
};

export default DressesIndex;
