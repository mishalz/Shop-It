import { useParams } from "react-router-dom";
import classes from "./ProductsDetail.module.css";
import useFetch from "../../hooks/useFetch";
import LoadingSpinner from "../Layout/LoadingSpinner";
const ProductDetail = (props) => {
  const params = useParams();
  const [, isLoading, hasError, searchedItem] = useFetch(
    `https://shop-it-d6e61-default-rtdb.firebaseio.com/${params.type}.json`,
    params.id
  );

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div className={classes.productDetail}>
          <div className={classes["productDetail__img"]}>
            <img src={searchedItem.image} />
          </div>
          <div className={classes["productDetail__description"]}>
            <div>
              <h1>{searchedItem.articleName}</h1>
            </div>
            <div>
              <p>{searchedItem.type}</p>
            </div>
            <div>
              <p>${searchedItem.price}</p>
            </div>
            <button>Add to cart</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
