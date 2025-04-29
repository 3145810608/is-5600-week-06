import React from "react";

const ProductDetail = ({ product, onBack }) => {
  return (
    <div className="pa4">
      <button className="mb3 bg-light-blue white pa2 br2" onClick={onBack}>
        Back to Products
      </button>
      <h2 className="f3">{product.name}</h2>
      <p>{product.description}</p>
      <div>
        {product.tags.map((tag) => (
          <span key={tag} className="f6 bg-light-gray pa1 ma1 br2">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
