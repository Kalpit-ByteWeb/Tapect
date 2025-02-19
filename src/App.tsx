import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Product from "./Pages/Product/Product";
import Features from "./Pages/Features/Features";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/features" element={<Features />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
