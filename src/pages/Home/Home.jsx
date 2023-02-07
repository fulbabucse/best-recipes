import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner";
import { getRecipes } from "../../features/recipes/recipeSlice";
import RecipeCard from "../Shared/RecipeCard";

const Home = () => {
  const { isLoading, recipes } = useSelector((state) => state.recipes);
  const [searchFilters, setSearchFilters] = useState(false);

  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  const handleSearchRecipe = (data) => {
    console.log(data);
  };

  return (
    <div className="mt-6 px-4 lg:px-0">
      <div className="bg-gray-100 pt-4">
        <div className="text-center font-semibold text-xl text-gray-700 w-full pb-2">
          <button
            onClick={() => setSearchFilters((filters) => !filters)}
            className="w-full pb-2"
          >
            Search Recipe by Filters
          </button>
        </div>
        {searchFilters && (
          <form
            onSubmit={handleSubmit(handleSearchRecipe)}
            className="w-full py-5 px-5 border-t border-t-gray-300"
          >
            <div className="flex flex-wrap space-y-2 lg:space-y-0">
              <div className="w-full md:w-1/3 px-3">
                <input
                  {...register("category_name")}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Category name"
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <input
                  {...register("recipe_name")}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Recipe name"
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <input
                  {...register("ingredient_name")}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Ingredient name"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <button
                type="submit"
                className="bg-purple-200 text-gray-700 border border-purple-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-purple-500 focus:border-purple-500 focus:text-white"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {recipes?.map((recipe) => (
          <RecipeCard key={recipe?._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
