import { useSelector } from "react-redux";
import RecipeCard from "./RecipeCard";

const FavoritesList = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div>
      <h2>Favorite Recipes</h2>
      {favorites.length === 0 ? <p>No favorites yet.</p> : 
        favorites.map((recipe, index) => <RecipeCard key={index} recipe={recipe} />)}
    </div>
  );
};

export default FavoritesList;
