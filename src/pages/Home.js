import React from "react";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";

const Home = () => {
  return (
    <div>
      <h1>Recipe App</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default Home;
