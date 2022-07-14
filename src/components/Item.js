import Card from "./Layout/Card";
import classes from "./Item.module.css";

const Item = (props) => {
  return (
    <Card className={props.className}>
      <header>{props.item.articleName}</header>
      <img className={classes["img"]} src={props.item.image} />
      <p>${props.item.price}</p>
    </Card>
  );
};
export default Item;
