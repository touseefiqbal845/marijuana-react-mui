import React, { useState } from "react";
import FilterConfig from "./filterConfig";
import FilterSidebar from "../CustomFilterComponent";
import ProductCard from "./ProductCard";
import Pagination from "../Pagination/Pagination";
import NavbarMobile from "../Navbar/NavbarItemsMobile";
import FilterSidebarMobile from "./FilterNavbar";

const products = [
  {
    id: 1,
    name: "Woodan Diwan",
    image:
      "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
    price: "29.99",
    oldPrice: "49.99",
    rating: 4,
  },
  {
    id: 2,
    name: "Wing Lounge Chair",
    image:
      "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
    price: "19.99",
    oldPrice: "39.99",
    rating: 3,
  },
  {
    id: 3,
    name: "Egon Wood Chair",
    image:
      "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
    price: "15.99",
    oldPrice: "25.99",
    rating: 5,
  },
  {
    id: 4,
    name: "Woodan Center Table",
    image:
      "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
    price: "15.99",
    oldPrice: "25.99",
    rating: 2,
  },
  {
    id: 5,
    name: "Woodan Center Table",
    image:
      "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
    price: "15.99",
    oldPrice: "25.99",
    rating: 4,
  },

  {
    id: 6,
    name: "Woodan Diwan",
    image:
      "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
    price: "29.99",
    oldPrice: "49.99",
    rating: 4,
  },
  {
    id: 7,
    name: "Wing Lounge Chair",
    image:
      "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
    price: "19.99",
    oldPrice: "39.99",
    rating: 3,
  },
  {
    id: 8,
    name: "Egon Wood Chair",
    image:
      "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
    price: "15.99",
    oldPrice: "25.99",
    rating: 5,
  },
];

const ProductListComponent = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    brands: [],
    colors: [],
    ratings: [],
    price: 0,
  });

  const totalPages = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLayout, setSelectedLayout] = useState("lg:grid-cols-3");
  const [gridColumns, setGridColumns] = useState("lg:grid-cols-3");
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleFilterChange = (key, value) => {
    setSelectedFilters((prevFilters) => {
      if (key === "price") {
        return { ...prevFilters, [key]: value };
      }
      const updatedFilters = prevFilters[key].includes(value)
        ? prevFilters[key].filter((item) => item !== value)
        : [...prevFilters[key], value];
      return { ...prevFilters, [key]: updatedFilters };
    });
  };

  const changeGridLayout = (columns) => {
    setSelectedLayout(columns);
    setGridColumns(columns);
  };

  return (
    <div className="">
      <div className="flex">
        <div className="w-64 max-h-[100vh] overflow-y-auto sticky top-20  hidden lg:block">
          <FilterSidebar
            filters={FilterConfig}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
          />
        </div>

        <div className="flex-1 p-4">
          <div className="w-full flex justify-center">
            <img
              src={
                "https://img.freepik.com/premium-vector/product-banner-podium-platform-with-geometric-shapes-nature-background_43880-464.jpg"
              }
              alt="Vertical Banner"
              className="w-full h-48 object-fit md:object-cover"
            />
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
            <div className="flex space-x-4">
              <select className="px-3 py-2 border rounded-lg bg-white text-gray-700 focus:outline-none">
                <option>Ascending Order</option>
                <option>Descending Order</option>
              </select>
              <select className="px-3 py-2 border rounded-lg bg-white text-gray-700 focus:outline-none">
                <option>10 Products</option>
                <option>20 Products</option>
                <option>50 Products</option>
              </select>
            </div>
            <div className="flex space-x-2  lg:hidden">
              <button
                onClick={() => setIsNavbarOpen(true)}
                className={`p-2 rounded-lg bg-secondary text-white"
                     "border hover:bg-gray-200  `}
              >
                Filter
              </button>
            </div>
            <div className="flex space-x-2 hidden lg:flex">
              <button
                onClick={() => changeGridLayout("lg:grid-cols-2")}
                className={`p-2 rounded-lg ${selectedLayout === "lg:grid-cols-2"
                  ? "bg-secondary text-white"
                  : "border hover:bg-gray-200"
                  }`}
              >
                ▭▭
              </button>
              <button
                onClick={() => changeGridLayout("lg:grid-cols-3")}
                className={`p-2 rounded-lg ${selectedLayout === "lg:grid-cols-3"
                  ? "bg-secondary text-white"
                  : "border hover:bg-gray-200"
                  }`}
              >
                ▭▭▭
              </button>
              <button
                onClick={() => changeGridLayout("lg:grid-cols-4")}
                className={`p-2 rounded-lg ${selectedLayout === "lg:grid-cols-4"
                  ? "bg-secondary text-white"
                  : "border hover:bg-gray-200"
                  }`}
              >
                ▭▭▭▭
              </button>
              <button
                onClick={() => changeGridLayout("lg:grid-cols-1")}
                className={`p-2 rounded-lg ${selectedLayout === "lg:grid-cols-1"
                  ? "bg-secondary text-white"
                  : "border hover:bg-gray-200"
                  }`}
              >
                ☰
              </button>
            </div>
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 ${gridColumns} gap-6`}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="flex flex-col items-center p-6">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
          <FilterSidebarMobile
            isOpen={isNavbarOpen}
            toggleSidebar={() => setIsNavbarOpen(false)}
            filters={FilterConfig}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductListComponent;
