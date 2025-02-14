import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipes } from "../redux/slices/recipesSlice";

const FilterOptions = () => {
  const [filter, setFilter] = useState("vegetarian");
  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(fetchRecipes(filter));
  };

  return (
    <div>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="vegetarian">Vegetarian</option>
        <option value="gluten-free">Gluten-Free</option>
        <option value="breakfast">Breakfast</option>
      </select>
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};

export default FilterOptions;
