import { Route, Routes } from "react-router-dom";
import BagsIndex from "./components/BagsIndex";
import DressesIndex from "./components/DressesIndex";
import FootwearIndex from "./components/FootwearIndex";
import Hompage from "./components/Homepage";
import Layout from "./components/Layout/Layout";
import NavigationBar from "./components/Layout/NavigationBar";

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
