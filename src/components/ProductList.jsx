import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default ProductList;
