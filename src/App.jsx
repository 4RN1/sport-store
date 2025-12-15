import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path = "/" element = {<Home/>}></Route>
      <Route path = "/category" element = {<Home/>}></Route>
      <Route path = "/category/jersey/:id" element = {<Home/>}></Route>
      <Route path = "/category/boots/:id" element = {<Home/>}></Route>
      <Route path = "/category/equipment/:id" element = {<Home/>}></Route>
      <Route path = "/" element = {<Home/>}></Route>

    </Routes>
    <Footer/>
    </>
  );
}

export default App;
