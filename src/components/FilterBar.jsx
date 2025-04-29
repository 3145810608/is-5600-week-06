import React from "react";

const FilterBar = ({ onFilter }) => {
  const tags = ["All", "tech", "fashion", "home", "sports", "books"];

  return (
    <div className="mb3 tc">
      {tags.map((tag) => (
        <button
          key={tag}
          className="ma1 pa2 br2 bg-light-gray hover-bg-dark-gray hover-white"
          onClick={() => onFilter(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
