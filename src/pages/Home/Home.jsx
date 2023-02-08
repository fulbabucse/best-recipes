import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../features/recipes/recipeSlice";
import RecipeCard from "../Shared/RecipeCard";
import { BsFilter } from "react-icons/bs";
import Spinner from "../../components/Spinner";

const Home = () => {
  const { recipes, isLoading } = useSelector((state) => state.recipes);
  const [searchFilters, setSearchFilters] = useState(false);
  const [recipeText, setRecipeText] = useState("");
  const [categoryText, setCategoryText] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes({ name: recipeText }));
  }, [dispatch, recipeText]);

  const handleSearchRecipe = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-6 px-4 lg:px-0">
      <div className="bg-gray-100 pt-4">
        <div className="text-center font-semibold text-xl text-gray-700 w-full pb-2">
          <button
            onClick={() => setSearchFilters((filters) => !filters)}
            className="w-full pb-2 flex items-center justify-center gap-1"
          >
            <span>Search Recipe by Filters</span> <BsFilter />
          </button>
        </div>
        {searchFilters && (
          <form
            onSubmit={() => handleSearchRecipe()}
            className="w-full py-5 px-5 border-t border-t-gray-300"
          >
            <div className="flex flex-wrap justify-center space-y-2 lg:space-y-0">
              <div className="w-full md:w-1/3 px-3">
                <select
                  onClick={(e) => setCategoryText(e.target.value)}
                  name="category_name"
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option selected>Select One</option>
                  <option value="chicken">Chicken</option>
                  <option value="pasta">Pasta</option>
                  <option value="fish">Fish</option>
                  <option value="beef">Beef</option>
                  <option value="dessert">Desserts</option>
                  <option value="vegetarian">Vegetarian</option>
                </select>
              </div>
              <div className="w-full md:w-1/3 px-3">
                <input
                  onChange={(e) => setRecipeText(e.target.value)}
                  name="recipe_name"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Recipe name"
                />
              </div>
              <div>
                <button
                  type="reset"
                  className="bg-purple-200 text-gray-700 border border-purple-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-purple-500 focus:border-purple-500 focus:text-white"
                >
                  Clear Filter
                </button>
              </div>
            </div>
          </form>
        )}
      </div>

      {isLoading && <Spinner />}
      {recipes?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-5">
          {recipes
            ?.filter((recipe) => {
              if (categoryText.length) {
                return categoryText === recipe.category;
              }
              return recipe;
            })
            ?.map((recipe) => (
              <RecipeCard key={recipe?._id} recipe={recipe} />
            ))}
        </div>
      ) : (
        <div>
          <h1 className="text-center text-red-500 mt-10">No found records</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
