import classes from "./Homepage.module.css";
import useFetch from "../hooks/useFetch";
import Card from "./Layout/UI/Card";
import { Link } from "react-router-dom";

const Hompage = () => {
  let dressesItem;
  let footwearItem;
  const [bags] = useFetch(
    `${process.env.REACT_APP_FIREBASE_BASE_URL}bags.json`
  );

  const [dresses] = useFetch(
    `${process.env.REACT_APP_FIREBASE_BASE_URL}dresses.json`
  );

  const [footwear] = useFetch(
    `${process.env.REACT_APP_FIREBASE_BASE_URL}footwear.json`
  );

  if (footwear) {
    footwearItem = footwear[0];
  }
  if (dresses) {
    dressesItem = dresses[0];
  }
  const bagsImages = bags.map((bag) => ({ id: bag.id, image: bag.image }));

  return (
    <>
      <div className={classes["first-section"]}>
        <div className={classes["first-section__scroll"]}>
          {bagsImages.map((bag) => (
            <img src={bag.image} key={bag.id} alt="a bag" />
          ))}
        </div>

        <div className={classes["first-section__description"]}>
          Get your hands on the best handbags in town
          <div>
            <Link to="/bags">see all</Link>
          </div>
        </div>
      </div>

      <div className={classes["second-section"]}>
        <Card
          className={classes["second-section__category"]}
          headerContent="Footwear"
          footerContent={<Link to="/footwear">see all</Link>}
          footerClass={classes["second-section__footer"]}
        >
          {footwearItem && <img src={footwearItem.image} alt="shoes" />}
        </Card>
        <Card
          className={classes["second-section__category"]}
          headerContent="Dresses"
          footerClass={classes["second-section__footer"]}
          footerContent={<Link to="/dresses">see all</Link>}
        >
          {dressesItem && <img src={dressesItem.image} alt="a dress" />}
        </Card>
      </div>

      <div className={classes["third-section"]}>
        <div className={classes["third-section__contacts"]}>
          <h1>Contact us</h1>
          <p>
            <i className="fa fa-envelope"></i> shop-it@gmail.com
          </p>

          <p>
            <i className="fa fa-instagram" /> Shop_it
          </p>
          <p>
            <i className="fa fa-facebook-official" /> Shop_it Official
          </p>
          <p>
            <i className="fa fa-phone"></i> +111 265 265
          </p>
          <p>
            <i className="fa fa-building"></i> 12 Bukhari Lane, Clifton,
            Karachi.
          </p>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default Hompage;
