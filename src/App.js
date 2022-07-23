import React from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Suspense } from "react";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import classes from "./components/products/ProductsDetail.module.css";

//<============= lazy routing ===========>
const Homepage = React.lazy(() => import("./components/Homepage"));
const DressesIndex = React.lazy(() =>
  import("./components/products/DressesIndex")
);
const BagsIndex = React.lazy(() => import("./components/products/BagsIndex"));
const FootwearIndex = React.lazy(() =>
  import("./components/products/FootwearIndex")
);
const ProductDetail = React.lazy(() =>
  import("./components/products/ProductDetail")
);
const NavigationBar = React.lazy(() =>
  import("./components/navbar/NavBar")
);
const Cart = React.lazy(() => import("./components/cart/Cart"));
const AuthForm = React.lazy(() => import("./components/users/AuthForm"));
const OrderForm = React.lazy(() => import("./components/orders/OrderForm"));
const OrdersHistory = React.lazy(() =>
  import("./components/orders/OrdersHistory")
);

function App() {
  const authState = useSelector((state) => state.auth.isLoggedIn);
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();
  const [orderFormOpen, setOrderFormOpen] = useState(false);

  const openCartHandler = () => {
    setCartOpen((prevState) => !prevState);
  };
  const openOrderFormHandler = () => {
    if (orderFormOpen && authState) {
      navigate(-1);
    }
    setOrderFormOpen((prevState) => !prevState);
  };

  return (
    <>
      <Suspense
        fallback={<LoadingSpinner className={classes.LoadingSpinner} />}
      >
        <NavigationBar onOpenCart={openCartHandler} />
        {cartOpen && (
          <Cart
            onCloseCart={openCartHandler}
            onOpenForm={openOrderFormHandler}
          />
        )}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dresses" element={<DressesIndex />} />
          <Route path="/bags" element={<BagsIndex />} />
          <Route path="/footwear" element={<FootwearIndex />} />
          {!authState && <Route path="/login" element={<AuthForm />} />}
          <Route path="/:type/:id" element={<ProductDetail />} />
          <Route
            path="/place-order"
            element={
              <>
                {authState && orderFormOpen && (
                  <OrderForm
                    onCloseForm={openOrderFormHandler}
                    onCloseCart={openCartHandler}
                  />
                )}
                {!authState && <Navigate to="/login" />}
              </>
            }
          />
          {authState && <Route path="my-orders" element={<OrdersHistory />} />}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
