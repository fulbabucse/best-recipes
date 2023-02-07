import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchRecipes from "./fetchRecipes";

const initialState = {
  isLoading: true,
  error: "",
  recipes: [],
};

export const getRecipes = createAsyncThunk("recipes/getRecipes", async () => {
  const data = fetchRecipes();
  return data;
});

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getRecipes.pending, (state, { payload }) => {
        state.isLoading = true;
        state.recipes = [];
        state.error = "";
      })
      .addCase(getRecipes.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.recipes = payload;
        state.error = "";
      })
      .addCase(getRecipes.rejected, (state, { error }) => {
        state.isLoading = false;
        state.recipes = [];
        state.error = error.message;
      });
  },
});

export default recipeSlice.reducer;
