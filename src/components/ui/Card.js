import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className} `}>
      {props.headerContent && (
        <header className={props.headerClass}>{props.headerContent}</header>
      )}
      {props.children}
      {props.footerContent && (
        <footer className={props.footerClass}>{props.footerContent}</footer>
      )}
    </div>
  );
};

export default Card;
