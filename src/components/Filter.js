import React from "react";

function Filter({ onCategoryChange, search, onSearchChange }) {
  
  function handleSearchChange(event){
    return(
      onSearchChange(event.target.value)
    )
  }

  return (
    <div className="Filter">
      <input 
        type="text" 
        name="search" 
        placeholder="Search..." 
        value={search}
        onChange={handleSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

// 1) Add/set state in Shopping lists
//    -import React, { useState } from "react"; 
//    -const [search, setSearch] = useState('')
// 2) pass state and setState as props to Filter
//    -set state key as state value
//    -comment out {setState} for later
// 3) add state as prop to Filter
// 4) add value property to input element and assign to {state}
// 5) add onChange to input element and assign to {handleOnChange}