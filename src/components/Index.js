import Item from "./Item";
import classes from "./Index.module.css";
const Index = (props) => {
  return (
    <div className={classes["flex-container"]}>
      {props.items.map((item) => (
        <Item className={props.className} item={item} key={item.id} />
      ))}
    </div>
  );
};
export default Index;
