import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useSelector((state) =>
    state.recipes.recipes.find((r) => r.uri === id)
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h2>{recipe.label}</h2>
      <img src={recipe.image} alt={recipe.label} />
      <p>Ingredients: {recipe.ingredientLines.join(", ")}</p>
      <p>Calories: {Math.round(recipe.calories)}</p>
    </div>
  );
};

export default RecipeDetails;
