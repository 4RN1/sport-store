import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/AiChatBot";
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
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<AllCategory />} />
        <Route path="/category/jerseys" element={<JerseyPage />} />
        <Route path="/category/shoes" element={<ShoesPage />} />
        <Route path="/category/equipment" element={<EquipmentPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>

      
      <Chatbot /> {/* 👈 stays on all pages */}
      <Footer />
    </>
  );
}

export default App;
