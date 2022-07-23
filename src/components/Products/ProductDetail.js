import { useParams } from "react-router-dom";
import classes from "./ProductsDetail.module.css";
import useFetch from "../../hooks/useFetch";
import LoadingSpinner from "../Layout/UI/LoadingSpinner";
import { useDispatch } from "react-redux";
import { increment } from "../../store/CartSlice";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [, isLoading, , searchedItem] = useFetch(
    `${process.env.REACT_APP_FIREBASE_BASE_URL}${params.type}.json`,
    params.id
  );

  const addToCartHandler = () => {
    dispatch(increment({ item: searchedItem }));
  };

  return (
    <>
      {isLoading && <LoadingSpinner className={classes.LoadingSpinner} />}
      {!isLoading && (
        <div className={classes.productDetail}>
          <div className={classes["productDetail__img"]}>
            <img src={searchedItem.image} alt={`a ${searchedItem.type}`} />
          </div>
          <div className={classes["productDetail__description"]}>
            <h1>{searchedItem.articleName}</h1>

            <p>{searchedItem.type}</p>

            <p>${searchedItem.price}</p>

            <button onClick={addToCartHandler}>
              Add to cart <i className="fa fa-shopping-cart"></i>
            </button>
            <Link to={`/${params.type}`}>
              <i className="fa fa-solid fa-arrow-left"> Continue Shopping</i>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
