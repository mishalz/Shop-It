import Item from "./Item";
import classes from "./Items.module.css";
import Layout from "../ui/Layout";
import LoadingSpinner from "../ui/LoadingSpinner";
import { useEffect, useState } from "react";

const Items = (props) => {
  let content;
  const [sortItems, setSortItems] = useState([]);

  useEffect(() => {
    setSortItems(props.itemsInfo.items);
  }, [props.itemsInfo.items]);

  const sortMyArray = (type) => {
    let items = [...props.itemsInfo.items];
    if (type === "asc") {
      items.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (type === "desc") {
      items.sort(function (a, b) {
        return b.price - a.price;
      });
    }
    setSortItems(items);
  };

  if (
    !props.itemsInfo.isLoading &&
    !props.itemsInfo.hasError &&
    sortItems.length !== 0
  ) {
    content = (
      <>
        {sortItems.map((item) => (
          <Item className={props.className} item={item} key={item.id} />
        ))}
      </>
    );
  }

  if (
    !props.itemsInfo.isLoading &&
    !props.itemsInfo.hasError &&
    sortItems.length === 0
  ) {
    content = (
      <div className={classes.empty}>
        <p>No Items to Show.</p>
      </div>
    );
  }

  if (!props.itemsInfo.isLoading && props.itemsInfo.hasError) {
    content = (
      <div className={classes.error}>
        <p>Error! Please try again.</p>
      </div>
    );
  }
  if (props.itemsInfo.isLoading) {
    content = <LoadingSpinner className={classes.LoadingSpinner} />;
  }

  return (
    <>
      <Layout>
        <label htmlFor="sort">Sort by </label>
        <select
          id="sort"
          className={classes.sortOpt}
          onChange={(e) => {
            sortMyArray(e.target.value);
          }}
        >
          <option value="none"></option>
          <option value="asc">Price (low to high)</option>
          <option value="desc">Price (high to low)</option>
        </select>

        <div className={classes["flex-container"]}>{content}</div>
      </Layout>
    </>
  );
};
export default Items;
