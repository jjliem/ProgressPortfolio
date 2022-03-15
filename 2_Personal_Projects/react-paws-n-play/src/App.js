import Shipping from "./components/Shipping";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Main from "./components/Main";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import data from "./data";
import { useState } from "react";

import "./components/FontAwesomeIcons";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      //remove product from cartItems
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Shipping></Shipping>
      <Header countCartItems={cartItems.length}></Header>
      <Banner></Banner>
      <div className="row">
        <Main onAdd={onAdd} products={products}></Main>
        <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Cart>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
