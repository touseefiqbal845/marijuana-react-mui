import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FilterSidebarMobile = ({
  isOpen,
  toggleSidebar,
  filters,
  selectedFilters,
  onFilterChange,
}) => {
  const [openSections, setOpenSections] = useState({});
  const [collapsedSections, setCollapsedSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform transition-opacity duration-700 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      onClick={toggleSidebar}
    >
      <div
        className={`fixed left-0 top-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-700 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex h-[calc(100vh-2rem)] w-full max-w-[20rem] border-b flex-col rounded-xl bg-white p-2 text-gray-700 shadow-xl">
          <div className="flex items-center justify-between p-2 mb-2 border-b">
            <button
              className="text-gray-700 hover:text-primary"
              onClick={toggleSidebar}
            >
              <IoArrowBack size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-0 p-0 font-sans text-base font-normal text-blue-gray-700">
            <div className="p-4">
              <div className="w-64  rounded-sm ">
                {filters.map((filter, index) => (
                  <div key={index} className="mb-4 border-b pb-2">
                    <div
                      className="flex justify-between items-center cursor-pointer text-heading hover:text-secondary"
                      onClick={() => toggleSection(filter.key)}
                    >
                      <h4 className="font-bold">{filter.name}</h4>
                      {collapsedSections[filter.key] ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </div>

                    {!collapsedSections[filter.key] && (
                      <div className="mt-2 max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-secondary">
                        {filter.type === "checkbox" &&
                          filter.options.map((option, i) => (
                            <label
                              key={i}
                              className="flex items-center space-x-2 cursor-pointer hover:text-secondary "
                            >
                              <input
                                type="checkbox"
                                checked={
                                  selectedFilters[filter.key]?.includes(
                                    option
                                  ) || false
                                }
                                onChange={() =>
                                  onFilterChange(filter.key, option)
                                }
                                className="form-checkbox text-secondary"
                              />
                              <span className="">{option}</span>
                            </label>
                          ))}

                        {filter.type === "color" && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {filter.options.map((color, i) => (
                              <button
                                key={i}
                                className={`w-6 h-6 rounded-full border border-gray-300 hover:border-secondary ${selectedFilters[filter.key]?.includes(color)
                                  ? "border-secondary"
                                  : ""
                                  }`}
                                style={{ backgroundColor: color }}
                                onClick={() =>
                                  onFilterChange(filter.key, color)
                                }
                              ></button>
                            ))}
                          </div>
                        )}

                        {filter.type === "rating" &&
                          filter.options.map((rating, i) => (
                            <label
                              key={i}
                              className="flex items-center space-x-2 cursor-pointer hover:text-secondary"
                            >
                              <input
                                type="checkbox"
                                checked={
                                  selectedFilters[filter.key]?.includes(
                                    rating
                                  ) || false
                                }
                                onChange={() =>
                                  onFilterChange(filter.key, rating)
                                }
                                className="form-checkbox text-secondary"
                              />
                              <span className="flex text-secondary">
                                {"★".repeat(rating)}
                                {"☆".repeat(5 - rating)}
                              </span>
                              <span>({rating} Star)</span>
                            </label>
                          ))}

                        {filter.type === "range" && (
                          <div className="mt-2">
                            <input
                              type="range"
                              min={filter.min}
                              max={filter.max}
                              value={selectedFilters[filter.key] || filter.min}
                              onChange={(e) =>
                                onFilterChange(filter.key, e.target.value)
                              }
                              className="w-full accent-secondary"
                            />
                            <div className="flex justify-between text-sm text-secondary">
                              <span className="bg-secondary text-white px-2 py-1 rounded">
                                ${filter.min}
                              </span>
                              <span className="bg-secondary text-white px-2 py-1 rounded">
                                ${selectedFilters[filter.key] || filter.min}
                              </span>
                              <span className="bg-secondary text-white px-2 py-1 rounded">
                                ${filter.max}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebarMobile;
