import Item from "./Item";
import classes from "./Items.module.css";
import Layout from "../Layout/UI/Layout";
import LoadingSpinner from "../Layout/UI/LoadingSpinner";

const Items = (props) => {
  let content;

  if (props.itemsInfo.isLoading) {
    content = <LoadingSpinner />;
  }
  if (!props.itemsInfo.isLoading && props.itemsInfo.hasError) {
    content = (
      <div className={classes.error}>
        <p>Error! Please try again.</p>
      </div>
    );
  }

  if (
    !props.itemsInfo.isLoading &&
    !props.itemsInfo.hasError &&
    props.itemsInfo.items.length === 0
  ) {
    content = (
      <div className={classes.empty}>
        <p>No Items to Show.</p>
      </div>
    );
  }

  if (
    !props.itemsInfo.isLoading &&
    !props.itemsInfo.hasError &&
    props.itemsInfo.items.length !== 0
  ) {
    content = (
      <>
        {props.itemsInfo.items.map((item) => (
          <Item className={props.className} item={item} key={item.id} />
        ))}
      </>
    );
  }
  return (
    <>
      <Layout>
        <div className={classes["flex-container"]}>{content}</div>{" "}
      </Layout>
    </>
  );
};
export default Items;
