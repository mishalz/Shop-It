import Items from "../assets/Items";
import useFetch from "../../hooks/useFetch";
import classes from "./DressesIndex.module.css";

const DressesIndex = () => {
  const [dresses, isLoading, hasError] = useFetch(
    `${process.env.REACT_APP_FIREBASE_BASE_URL}dresses.json`
  );

  return (
    <Items
      className={classes.DressesIndex}
      itemsInfo={{ items: dresses, isLoading, hasError }}
    />
  );
};

export default DressesIndex;
