import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>{recipe.label}</h3>
      <img src={recipe.image} alt={recipe.label} width="150" />
      <p>Calories: {Math.round(recipe.calories)}</p>
      <a href={recipe.url} target="_blank" rel="noopener noreferrer">
        View Recipe
      </a>
    </div>
  );
};

export default RecipeCard;
