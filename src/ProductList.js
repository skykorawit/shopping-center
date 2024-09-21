import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={product.id}>
            <ProductItem product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
