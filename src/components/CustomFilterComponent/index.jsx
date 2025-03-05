import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FilterSidebar = ({ filters, selectedFilters, onFilterChange }) => {
  const [collapsedSections, setCollapsedSections] = useState({});

  const toggleSection = (key) => {
    setCollapsedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-64 p-4 bg-primary shadow-md rounded-sm ">
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
                        selectedFilters[filter.key]?.includes(option) || false
                      }
                      onChange={() => onFilterChange(filter.key, option)}
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
                      onClick={() => onFilterChange(filter.key, color)}
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
                        selectedFilters[filter.key]?.includes(rating) || false
                      }
                      onChange={() => onFilterChange(filter.key, rating)}
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
                    onChange={(e) => onFilterChange(filter.key, e.target.value)}
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
  );
};

export default FilterSidebar;
