import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Pagination from "./components/Pagination";
import FilterBar from "./components/FilterBar";
import productsData from "./data/products";

const App = () => {
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleBackToList = () => {
    setSelectedProduct(null);
  };

  const handleFilter = (tag) => {
    if (tag === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((p) => p.tags.includes(tag));
      setFilteredProducts(filtered);
    }
    setCurrentPage(1);
  };

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  return (
    <div className="pa4">
      <h1 className="f2 tc">Product Catalog</h1>
      {selectedProduct ? (
        <ProductDetail product={selectedProduct} onBack={handleBackToList} />
      ) : (
        <>
          <FilterBar onFilter={handleFilter} />
          <ProductList products={currentProducts} onSelect={handleSelectProduct} />
          <Pagination
            totalProducts={filteredProducts.length}
            productsPerPage={productsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default App;
