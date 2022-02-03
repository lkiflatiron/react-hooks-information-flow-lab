import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartObj, setIsInCart] = useState({})

  function handleAddToCartClick(event) {
    const boolTest = cartObj[event.target.id] ? false : true
    setIsInCart({
      ...cartObj,
      [event.target.id]: boolTest
     })
  }
  console.log()
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });


//name, category, isInCart, handleAddToCartClick
  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} 
                id={item.id} 
                isInCart={cartObj[item.id] ? true : false} 
                name={item.name} 
                category={item.category} 
                handleClick={handleAddToCartClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
