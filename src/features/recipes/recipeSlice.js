import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRecipes, fetchSingleRecipe } from "./fetchRecipes";

const initialState = {
  isLoading: true,
  error: "",
  recipes: [],
  recipe: {},
};

export const getRecipes = createAsyncThunk(
  "recipes/getRecipes",
  async ({ name }) => {
    const data = fetchRecipes(name);
    return data;
  }
);

export const getSingleRecipe = createAsyncThunk(
  "recipes/getSingleRecipe",
  async ({ id }) => {
    const data = fetchSingleRecipe(id);
    return data;
  }
);

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
      })
      .addCase(getSingleRecipe.pending, (state, { payload }) => {
        state.isLoading = true;
        state.recipe = {};
        state.error = "";
      })
      .addCase(getSingleRecipe.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.recipe = payload;
        state.error = "";
      })
      .addCase(getSingleRecipe.rejected, (state, { error }) => {
        state.isLoading = false;
        state.recipes = {};
        state.error = error.message;
      });
  },
});

export default recipeSlice.reducer;
