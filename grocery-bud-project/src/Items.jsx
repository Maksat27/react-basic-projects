import React from "react";
import SingleItems from "./SingleItems";

const Items = ({ items, removeItem, toggleItem }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItems
            key={item.id}
            item={item}
            removeItem={removeItem}
            toggleItem={toggleItem}
          />
        );
      })}
    </div>
  );
};

export default Items;
