import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import AllCategory from "./pages/AllCategoryPage";
import JerseyPage from "./pages/JerseyPage";
import EquipmentPage from "./pages/EquipmentPage";
import ShoesPage from "./pages/ShoesPage";
import InfoPage from "./pages/InfoPage";
import Registration from "./pages/Registration";
import LoginPage from "./pages/LoginPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SuccessPage from "./pages/SuccessPage";





function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path = "/" element = {<Home/>}></Route>
      <Route path = "/category" element = {<AllCategory/>}></Route>
      <Route path = "/category/jerseys" element = {<JerseyPage/>}></Route>
      <Route path = "/category/shoes" element = {<ShoesPage/>}></Route>
      <Route path = "/category/equipment" element = {<EquipmentPage/>}></Route>
      <Route path = "/product/:id" element = {<ProductDetailPage/>}></Route>
      <Route path = "/info" element = {<InfoPage/>}></Route>
      <Route path = "/registration" element = {<Registration/>}></Route>
      <Route path = "/login" element = {<LoginPage/>}></Route>
      <Route path = "/success" element = {<SuccessPage/>}></Route>

    </Routes>
    <Footer/>
    </>
  );
}

export default App;
