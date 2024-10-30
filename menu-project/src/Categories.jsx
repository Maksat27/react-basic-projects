import React from "react";

const Categories = ({ categories, filterBtn }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            key={category}
            className="btn"
            data-id={category}
            onClick={() => filterBtn(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
