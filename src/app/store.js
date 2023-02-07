import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import recipeSlice from "../features/recipes/recipeSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    recipes: recipeSlice,
  },
});

export default store;
