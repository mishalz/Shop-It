import { Route, Routes } from "react-router-dom";
import Hompage from "./components/Homepage";
import DressesIndex from "./components/Products/DressesIndex";
import BagsIndex from "./components/Products/BagsIndex";
import FootwearIndex from "./components/Products/FootwearIndex";
import NavigationBar from "./components/Navbar/NavBar";
import Layout from "./components/Layout/Layout";
function App() {
  return (
    <>
      <NavigationBar />
      <Layout>
        <Routes>
          <Route path="/" element={<Hompage />}></Route>
          <Route path="/dresses" element={<DressesIndex />}></Route>
          <Route path="/bags" element={<BagsIndex />}></Route>
          <Route path="/footwear" element={<FootwearIndex />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
