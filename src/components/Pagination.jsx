import React from "react";

const Pagination = ({
  totalProducts,
  productsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="tc">
      <ul className="list pl0">
        {pageNumbers.map((number) => (
          <li key={number} className="dib ma2">
            <button
              className={`pa2 br2 bg-light-gray hover-bg-dark-gray hover-white ${
                number === currentPage ? "bg-dark-gray white" : ""
              }`}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
