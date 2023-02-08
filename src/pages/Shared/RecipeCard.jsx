import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  removeRecipe,
  saveRecipes,
} from "../../features/recipes/SaveRecipeSlice";

const RecipeCard = ({ recipe }) => {
  const { _id, label, image, ingredientLines } = recipe;
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const handleSaveRecipe = (data) => {
    dispatch(saveRecipes(data));
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-full">
      <img className="w-full" src={image} alt={label} />
      <div className="p-4 relative h-fit">
        <div className="font-medium text-lg">
          {label.length > 15 ? `${label.slice(0, 15)}...` : label}
        </div>

        <div className="mt-4 text-center">
          {ingredientLines?.slice(0, 2)?.map((item, index) => (
            <span
              key={index}
              className="flex justify-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {item.length > 30 ? `${item.slice(0, 30)}...` : item}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center mt-5">
          <Link to={`/recipe/${_id}`}>
            <button className="border border-green-500 bg-green-500 text-white rounded-md px-3 py-1 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">
              Details
            </button>
          </Link>
          {pathname === "/dashboard" ? (
            <button
              onClick={() => dispatch(removeRecipe(_id))}
              className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-3 py-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => handleSaveRecipe(recipe)}
              className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-3 py-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
