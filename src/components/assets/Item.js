import { Link } from "react-router-dom";
import Card from "../ui/Card";
import classes from "./Item.module.css";

const Item = (props) => {
  const itemType = window.location.pathname.toString().slice(1);

  return (
    <div className={classes.item}>
      <Card
        className={`${props.className}`}
        headerContent={props.item.articleName}
        footerContent={`$${props.item.price}`}
      >
        <Link to={`${window.location.pathname}/${props.item.id}`}>
          <img
            className={classes["img"]}
            src={props.item.image}
            alt={`a ${itemType}`}
          />
        </Link>
      </Card>
    </div>
  );
};
export default Item;
