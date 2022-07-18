import NavigationBar from "./Layout/Navbar/NavBar";
import classes from "./Homepage.module.css";
import useFetch from "../hooks/useFetch";
import Card from "./Layout/UI/Card";

const Hompage = () => {
  let dressesItem;
  let footwearItem;
  const [bags] = useFetch(
    "https://shop-it-d6e61-default-rtdb.firebaseio.com/bags.json"
  );

  const [dresses] = useFetch(
    "https://shop-it-d6e61-default-rtdb.firebaseio.com/dresses.json"
  );

  const [footwear] = useFetch(
    "https://shop-it-d6e61-default-rtdb.firebaseio.com/footwear.json"
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
      <NavigationBar />

      <div className={classes["first-section"]}>
        <div className={classes["first-section__scroll"]}>
          {bagsImages.map((bag) => (
            <img src={bag.image} key={bag.id} alt="a bag" />
          ))}
        </div>

        <div className={classes["first-section__description"]}>
          Get your hands on the best handbags in town
          <div>
            <a href="/bags">see all</a>
          </div>
        </div>
      </div>

      <div className={classes["second-section"]}>
        <Card
          className={classes["second-section__category"]}
          headerContent="Footwear"
          footerContent={<a href="/footwear">see all</a>}
          footerClass={classes["second-section__footer"]}
        >
          {footwearItem && <img src={footwearItem.image} alt="shoes" />}
        </Card>
        <Card
          className={classes["second-section__category"]}
          headerContent="Dresses"
          footerClass={classes["second-section__footer"]}
          footerContent={<a href="/dresses">see all</a>}
        >
          {dressesItem && <img src={dressesItem.image} alt="a dress" />}
        </Card>
      </div>

      <div className={classes["third-section"]}>
        <div className={classes["third-section__contacts"]}>
          <h1>Contact us</h1>
          <p>
            <i class="fa fa-envelope"></i> shop-it@gmail.com
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
