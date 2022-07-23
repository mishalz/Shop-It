import classes from "./FootwearIndex.module.css";
import useFetch from "../../hooks/useFetch";
import Items from "../assets/Items";

const FootwearIndex = () => {
  const [footwear, isLoading, hasError] = useFetch(
    `${process.env.REACT_APP_FIREBASE_BASE_URL}footwear.json`
  );
  return (
    <Items
      className={classes.FootwearIndex}
      itemsInfo={{ items: footwear, isLoading, hasError }}
    />
  );
};

export default FootwearIndex;
