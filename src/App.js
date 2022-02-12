import React, { useState, useEffect } from "react";
//import Products from './components/Products/Product'
import { Products, Navbar,ViewItem } from "./components";
import Cart from "./components/Cart/Cart";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [productView, setView]=useState({});


  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
    //console.log(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };
  const viewItem = async (productId) => {
    const item =  await commerce.products.retrieve(productId);

    setView(item);
    console.log(item);
  };


const updateCartQuant = async(productId,quantity) =>{
  const response = await commerce.cart.update(productId,{quantity});
  setCart(response.cart);
}
const removeFromCart = async (productId) => {
  const response = await commerce.cart.remove(productId);

  setCart(response.cart);
}; 

const emptyCart = async () => {
  const response = await commerce.cart.empty();

  setCart(response.cart);
};
 

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Products products={products} onAddToCart={handleAddToCart} viewItem={viewItem} />
            }
          />
          <Route exact path="/cart" element={<Cart 
          cart={cart}
          emptyCart={emptyCart}
          removeFromCart={removeFromCart}
          updateCartQuant={updateCartQuant}
           />} />
            {/* <Route exact path="/viewitem" element={
            <ViewItem 
            viewItem={productView}
            products={products}
            onAddToCart={handleAddToCart}
           />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
