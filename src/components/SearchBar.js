import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipes } from "../redux/slices/recipesSlice";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query.trim() !== "") {
      dispatch(fetchRecipes(query));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
