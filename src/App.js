// App.js
import React, { useState } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import Checkout from './Checkout'; // นำเข้า Checkout
import './App.css';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 100, description: 'Description 1' },
    { id: 2, name: 'Product 2', price: 200, description: 'Description 2' },
    { id: 3, name: 'Product 3', price: 300, description: 'Description 3' },
    { id: 4, name: 'Product 4', price: 300, description: 'Description 4' },
    { id: 5, name: 'Product 5', price: 300, description: 'Description 5' },
    { id: 6, name: 'Product 6', price: 300, description: 'Description 6' },
    { id: 7, name: 'Product 7', price: 300, description: 'Description 7' },
    { id: 8, name: 'Product 8', price: 300, description: 'Description 8' },
    { id: 9, name: 'Product 9', price: 300, description: 'Description 9' },
    { id: 10, name: 'Product 10', price: 300, description: 'Description 10' },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existItem = cartItems.find((item) => item.id === product.id);
    if (existItem) {
      setCartItems(cartItems.map((item) =>
        item.id === product.id ? { ...existItem, quantity: existItem.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  const handleUpdateQuantity = (product, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(product);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };
  
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart App</h1>

      {/* ส่วนแสดงรายการสินค้า */}
      <ProductList products={products} onAddToCart={handleAddToCart} />

      {/* ส่วนแสดงตะกร้าสินค้า */}
      <ShoppingCart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} onUpdateQuantity={handleUpdateQuantity} />

      {/* ส่วนแสดงผลรวมราคาและคูปอง */}
      <Checkout total={cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)} />
    </div>
  );
};

export default App;
