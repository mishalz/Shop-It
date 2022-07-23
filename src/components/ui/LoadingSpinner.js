import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = (props) => {
  return (
    <div className={classes["spinner-container"]}>
      <div className={`${props.className} ${classes["loading-spinner"]}`}></div>
    </div>
  );
};

export default LoadingSpinner;
