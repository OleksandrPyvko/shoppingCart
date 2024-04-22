import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Store from "./Pages/Store";
import Navbar from "./components/Navbar";
import {
  ShoppingCartProvider,
  useShoppingCart,
} from "./context/ShopingCartContext";

function App() {
  const { isOpen } = useShoppingCart();

  return (
    <div>
      <ShoppingCartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
