const FilterConfig = [
  { name: "Categories", key: "categories", type: "checkbox", options: ["Fashion", "Furniture", "Book", "Vegetable", "Bag"] },
  { name: "Brand", key: "brands", type: "checkbox", options: ["Nike", "Adidas", "Puma", "Reebok"] },
  { name: "Colours", key: "colors", type: "color", options: ["blue", "green", "red", "beige", "black"] },
  { name: "Rating", key: "ratings", type: "rating", options: [5, 4, 3, 2, 1] },
  { name: "Price", key: "price", type: "range", min: 0, max: 1500 },
];

export default FilterConfig;
