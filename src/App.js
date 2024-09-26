// App.js
import React, { useState } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import Checkout from './Checkout'; // นำเข้า Checkout
import './App.css';

const App = () => {
  const [products] = useState([
    {
      id: 1,
      name: 'SteelSeries Arctis Nova Pro Wireless',
      price: 16500,
      description: (
        <ul>
          <li>Driver: 40mm</li>
          <li>Frequency response (wired): 10–40,000 Hz</li>
          <li>Frequency response (wireless): 10–22,000 Hz</li>
          <li>Sensitivity: 93 dBSPL</li>
          <li>Impedance: 38 Ohm</li>
          <li>Active Noise Cancellation: 4-mic hybrid design with Transparency Mode</li>
          <li>Microphone Type: ClearCast Gen 2 - Fully Retractable Boom</li>
          <li>Microphone Polar Pattern: Bidirectional Noise-Canceling</li>
          <li>Battery Life: Up to 44 hours</li>
          <li>Bluetooth: 5.0</li>
          <li>Wireless Range: 12 meters</li>
        </ul>
      ),
      image: '/images/product1.jpg',
    },
    {
      id: 2,
      name: 'HyperX Cloud Alpha',
      price: 3190,
      description: (
        <ul>
          <li>Dual Chamber Drivers for more distinction and less distortion</li>
          <li>Frequency response: 13 Hz - 27,000 Hz</li>
          <li>Microphone Noise Cancellation</li>
          <li>Durable Aluminum Frame</li>
          <li>Detachable Noise Cancellation Microphone</li>
          <li>Compatible with PC, PS5, PS4, Xbox Series X|S</li>
        </ul>
      ),
      image: '/images/product2.jpg',
    },
    {
      id: 3,
      name: 'Razer BlackShark V2',
      price: 6990,
      description: (
        <ul>
          <li>TriForce Titanium 50mm Drivers</li>
          <li>THX Spatial Audio</li>
          <li>Advanced Passive Noise Cancellation</li>
          <li>Ultra-soft Flowknit Memory Foam Ear Cushions</li>
          <li>Detachable Razer HyperClear Cardioid Mic</li>
          <li>Compatible with PC, PS4, PS5, Xbox, Nintendo Switch</li>
        </ul>
      ),
      image: '/images/product3.png',
    },
    {
      id: 4,
      name: 'Logitech G Pro X Wireless',
      price: 7990,
      description: (
        <ul>
          <li>PRO-G 50mm Drivers</li>
          <li>Lightspeed Wireless Technology</li>
          <li>BLUE VO!CE Microphone Technology</li>
          <li>DTS Headphone:X 2.0 Surround Sound</li>
          <li>Detachable Microphone</li>
          <li>Compatible with PC and PlayStation</li>
        </ul>
      ),
      image: '/images/product4.jpg',
    },
    {
      id: 5,
      name: 'Corsair HS80 RGB Wireless',
      price: 10590,
      description: (
        <ul>
          <li>Custom-tuned 50mm neodymium drivers</li>
          <li>Frequency response: 20 Hz - 40,000 Hz</li>
          <li>Dolby Atmos Immersive Sound</li>
          <li>Slipstream Wireless Technology</li>
          <li>Omnidirectional Microphone</li>
        </ul>
      ),
      image: '/images/product5.jpg',
    },
    {
      id: 6,
      name: 'Beyerdynamic MMX 150',
      price: 7990,
      description: (
        <ul>
          <li>40mm drivers for studio-quality sound</li>
          <li>Augmented Mode for environmental sound awareness</li>
          <li>Detachable META VOICE Microphone</li>
          <li>Compatible with PC, PS5, PS4, Xbox Series X|S</li>
        </ul>
      ),
      image: '/images/product6.jpg',
    },
    {
      id: 7,
      name: 'EPOS H6PRO',
      price: 220,
      description: (
        <ul>
          <li>Open-back design for more natural sound</li>
          <li>Detachable boom microphone</li>
          <li>Comfortable memory foam ear pads</li>
          <li>Compatible with all gaming platforms</li>
        </ul>
      ),
      image: '/images/product7.jpg',
    },
    {
      id: 8,
      name: 'Astro A50 Wireless',
      price: 3990,
      description: (
        <ul>
          <li>ASTRO Audio V2 for detailed sound</li>
          <li>Dolby Audio for immersive sound</li>
          <li>15+ hours of battery life</li>
          <li>Base Station included for charging</li>
          <li>Compatible with PC, PS5, PS4, Xbox Series X|S</li>
        </ul>
      ),
      image: '/images/product8.png',
    },
    {
      id: 9,
      name: 'Sennheiser GSP 670',
      price: 6990,
      description: (
        <ul>
          <li>Low-latency wireless connection</li>
          <li>Up to 20 hours of battery life</li>
          <li>Noise-cancelling microphone</li>
          <li>Durable metal hinges</li>
          <li>Compatible with PC and PlayStation</li>
        </ul>
      ),
      image: '/images/product9.jpg',
    },
    {
      id: 10,
      name: 'Razer Kraken Ultimate',
      price: 6990,
      description: (
        <ul>
          <li>Custom-tuned 50mm drivers</li>
          <li>THX Spatial Audio</li>
          <li>Active Noise-Cancelling Microphone</li>
          <li>Aluminum and Steel frame for durability</li>
          <li>Compatible with PC and PlayStation</li>
        </ul>
      ),
      image: '/images/product10.jpg',
    },
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
