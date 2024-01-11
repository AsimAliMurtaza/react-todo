import React from "react";
import Item from "./Item";

const Items = ({ items, handleDelete, handleToggle }) => {
  return (
    <div className="items-container">
      <ul className="items-list">
        {items.map((item) => (
          <Item
            item={item}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Items;
