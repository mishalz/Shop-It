import Item from "./Item";
import classes from "./Index.module.css";
import LoadingSpinner from "../Layout/LoadingSpinner";
const Index = (props) => {
  let content;

  if (props.isLoading) {
    content = <LoadingSpinner />;
  }
  if (!props.isLoading && props.hasError) {
    content = (
      <div className={classes.error}>
        <p>Error! Please try again.</p>
      </div>
    );
  }

  if (!props.isLoading && !props.hasError && props.items.length === 0) {
    content = (
      <div className={classes.empty}>
        <p>No Items to Show.</p>
      </div>
    );
  }

  if (!props.isLoading && !props.hasError && props.items.length !== 0) {
    content = (
      <>
        {props.items.map((item) => (
          <Item className={props.className} item={item} key={item.id} />
        ))}
      </>
    );
  }
  return <div className={classes["flex-container"]}>{content}</div>;
};
export default Index;
