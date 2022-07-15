import { Route, Routes } from "react-router-dom";
import Hompage from "./components/Homepage";
import DressesIndex from "./components/Products/DressesIndex";
import BagsIndex from "./components/Products/BagsIndex";
import FootwearIndex from "./components/Products/FootwearIndex";
import NavigationBar from "./components/Layout/Navbar/NavBar";
import Layout from "./components/Layout/Layout";
import Background from "./components/Layout/Background";
import ProductDetail from "./components/Products/ProductDetail";
function App() {
  return (
    <Background>
      <NavigationBar />
      <Layout>
        <Routes>
          <Route path="/" element={<Hompage />} />
          <Route path="/dresses" element={<DressesIndex />} />
          <Route path="/bags" element={<BagsIndex />} />
          <Route path="/footwear" element={<FootwearIndex />} />
          <Route path="/:type/:id" element={<ProductDetail />} />
        </Routes>
      </Layout>
    </Background>
  );
}

export default App;
