import { Route, Routes } from "react-router-dom";
import Hompage from "./components/Homepage";
import DressesIndex from "./components/Products/DressesIndex";
import BagsIndex from "./components/Products/BagsIndex";
import FootwearIndex from "./components/Products/FootwearIndex";
import ProductDetail from "./components/Products/ProductDetail";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Hompage />} />
      <Route path="/dresses" element={<DressesIndex />} />
      <Route path="/bags" element={<BagsIndex />} />
      <Route path="/footwear" element={<FootwearIndex />} />
      <Route path="/:type/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
