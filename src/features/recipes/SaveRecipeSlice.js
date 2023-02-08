import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedRecipes: [],
};

const saveRecipeSlice = createSlice({
  name: "saveRecipes",
  initialState,
  reducers: {
    saveRecipes: (state, action) => {
      state.savedRecipes = [...state.savedRecipes, action.payload];
    },
    removeRecipe: (state, action) => {
      state.savedRecipes = state.savedRecipes.filter(
        (recipe) => recipe._id !== action.payload
      );
    },
  },
});

export const { saveRecipes, removeRecipe } = saveRecipeSlice.actions;

export default saveRecipeSlice.reducer;
