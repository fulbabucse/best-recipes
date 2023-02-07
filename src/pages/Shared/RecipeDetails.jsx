import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleRecipe } from "../../features/recipes/recipeSlice";
import Spinner from "../../components/Spinner";

const RecipeDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { recipe, isLoading } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getSingleRecipe({ id }));
  }, [dispatch, id]);

  if (isLoading) {
    return <Spinner />;
  }

  const {
    category,
    uri,
    label,
    image,
    source,
    url,
    shareAs,
    dietLabels,
    healthLabels,
    cautions,
    ingredientLines,
    ingredients,
    colories,
    totalWeight,
    totalTime,
    cuisineType,
    mealType,
    dishType,
  } = recipe;

  return (
    <div className="w-full lg:max-w-3xl mx-auto mt-5 shadow-lg p-4 grid grid-cols-2 gap-4 items-center justify-center">
      <div>
        <img src={image} alt={label} className="drop-shadow-2xl" />
      </div>
      <div>
        <h2 className="text-xl font-medium text-gray-700 capitalize">
          {label}
        </h2>

        <h2 className="text-lg font-medium text-gray-700 capitalize">
          {category}
        </h2>

        <h2 className="text-lg font-medium text-gray-600 capitalize italic mt-3">
          {healthLabels?.length} Health Labels
        </h2>
        <div className="flex flex-wrap gap-2 text-sm">
          {healthLabels?.map((ingredient, index) => (
            <p key={index} className="hover:text-green-500 cursor-pointer">
              {ingredient}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
