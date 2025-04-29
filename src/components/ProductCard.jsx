import React from "react";

const ProductCard = ({ product, onSelect }) => {
  return (
    <div
      className="ba b--black-10 ma2 pa3 w5 grow pointer shadow-1"
      onClick={() => onSelect(product)}
    >
      <h2 className="f4">{product.name}</h2>
      <p className="gray">{product.description}</p>
      <div className="mt2">
        {product.tags.map((tag) => (
          <span key={tag} className="f6 bg-light-gray pa1 ma1 br2">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
