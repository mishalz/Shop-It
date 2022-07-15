import { Link } from "react-router-dom";
import Card from "../Layout/Card";
import classes from "./Item.module.css";

const Item = (props) => {
  return (
    <Card className={props.className}>
      <Link to={`${window.location.pathname}/${props.item.id}`}>
        <header>{props.item.articleName}</header>
        <img className={classes["img"]} src={props.item.image} />
        <p>${props.item.price}</p>
      </Link>
    </Card>
  );
};
export default Item;
