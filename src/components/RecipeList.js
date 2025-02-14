import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../redux/slices/recipesSlice";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const dispatch = useDispatch();
  const { recipes, status, error } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes("pizza")); // Default search
  }, [dispatch]);

  if (status === "loading") return <p>Loading recipes...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div>
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
