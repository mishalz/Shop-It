import classes from "./FootwearIndex.module.css";
import useFetch from "../../hooks/useFetch";
import Index from "../assets/Index";

const FootwearIndex = () => {
  const [footwear, isLoading, hasError,] = useFetch(
    "https://shop-it-d6e61-default-rtdb.firebaseio.com/footwear.json"
  );
  return (
    <Index
      className={classes.FootwearIndex}
      items={footwear}
      isLoading={isLoading}
      hasError={hasError}
    />
  );
};

export default FootwearIndex;
