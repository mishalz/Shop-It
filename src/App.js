import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Hompage from "./components/Homepage";
import DressesIndex from "./components/products/DressesIndex";
import BagsIndex from "./components/products/BagsIndex";
import FootwearIndex from "./components/products/FootwearIndex";
import ProductDetail from "./components/products/ProductDetail";
import NavigationBar from "./components/Layout/Navbar/NavBar";
import { useState } from "react";
import Cart from "./components/cart/Cart";
import AuthForm from "./components/users/AuthForm";
import { useSelector } from "react-redux";
import OrderForm from "./components/orders/OrderForm";
import OrdersHistory from "./components/orders/OrdersHistory";

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
      <NavigationBar onOpenCart={openCartHandler} />
      {cartOpen && (
        <Cart onCloseCart={openCartHandler} onOpenForm={openOrderFormHandler} />
      )}
      <Routes>
        <Route path="/" element={<Hompage />} />
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
    </>
  );
}

export default App;
