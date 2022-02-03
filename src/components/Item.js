import React from "react";

function Item({ name, id, category, isInCart, handleClick }) {
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        id={id}
        className={isInCart ? "remove" : "add"}
        onClick={handleClick}
      >
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
