import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API Credentials
const API_ID = "a5de3521";
const API_KEY = "28f8a20bd893e2740e68d4bbb349b977";

// Async Thunk to Fetch Recipes
export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (query = "pizza") => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=10`
    );
    return response.data.hits.map((hit) => hit.recipe);
  }
);

// Redux Slice
const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default recipesSlice.reducer;
