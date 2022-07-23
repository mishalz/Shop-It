import classes from "./NavBar.module.css";
import "font-awesome/css/font-awesome.min.css";
import NavMenu from "./NavMenu";
const NavigationBar = (props) => {
  return (
    <header className={classes.navbarHeader}>
      <section className={classes.NavbarTitleSection}>
        <div className={classes["Navbar__title"]}>
          <h1>Shop It</h1>
          <i className="fa fa-paw"></i>
        </div>
        <NavMenu onOpenCart={props.onOpenCart} />
      </section>
    </header>
  );
};

export default NavigationBar;
