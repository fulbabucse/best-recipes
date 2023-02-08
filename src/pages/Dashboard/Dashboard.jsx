import React from "react";
import { useSelector } from "react-redux";
import RecipeCard from "../Shared/RecipeCard";

const Dashboard = () => {
  const { savedRecipes } = useSelector((state) => state.saveRecipes);

  return (
    <div className="my-10 px-4 lg:px-0 h-screen">
      {savedRecipes.length === 0 ? (
        <>
          <h1 className="text-center my-3 text-xl font-medium text-gray-700">
            Your saved Recipes is Empty !!
          </h1>
        </>
      ) : (
        <>
          <h1 className="text-center my-3 text-xl font-medium text-gray-700">
            Your {savedRecipes.length} Saved Recipes
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {savedRecipes?.map((recipe) => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
