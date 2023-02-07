import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../features/recipes/recipeSlice";
import RecipeCard from "../Shared/RecipeCard";

const Home = () => {
  const { isLoading, error, recipes } = useSelector((state) => state.recipes);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  if (isLoading) {
    return (
      <h1 className="mt-10 text-xl text-center font-medium text-gray-800">
        Loading...
      </h1>
    );
  }

  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {recipes?.map((recipe) => (
          <RecipeCard key={recipe?._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
