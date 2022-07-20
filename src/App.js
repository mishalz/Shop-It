import { Route, Routes } from "react-router-dom";
import Hompage from "./components/Homepage";
import DressesIndex from "./components/Products/DressesIndex";
import BagsIndex from "./components/Products/BagsIndex";
import FootwearIndex from "./components/Products/FootwearIndex";
import ProductDetail from "./components/Products/ProductDetail";
import NavigationBar from "./components/Layout/Navbar/NavBar";
import { useState } from "react";
import Cart from "./components/cart/Cart";
import AuthForm from "./components/users/AuthForm";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const openCartHandler = () => {
    setCartOpen((prevState) => !prevState);
  };
  return (
    <>
      <NavigationBar onOpenCart={openCartHandler} />
      {cartOpen && <Cart onCloseCart={openCartHandler} />}
      <Routes>
        <Route path="/" element={<Hompage />} />
        <Route path="/dresses" element={<DressesIndex />} />
        <Route path="/bags" element={<BagsIndex />} />
        <Route path="/footwear" element={<FootwearIndex />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/:type/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
