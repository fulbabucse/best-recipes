import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import recipeSlice from "../features/recipes/recipeSlice";
import SaveRecipeSlice from "../features/recipes/SaveRecipeSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    recipes: recipeSlice,
    saveRecipes: SaveRecipeSlice,
  },
});

export default store;
