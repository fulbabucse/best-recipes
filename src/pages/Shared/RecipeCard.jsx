import React from "react";

const RecipeCard = ({ recipe }) => {
  console.log(recipe);

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
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={label} />
      <div className="px-6 py-4">
        <div className="font-medium text-lg">
          {label.length > 15 ? `${label.slice(0, 15)}...` : label}
        </div>
        <p className="text-gray-700 text-base"></p>
      </div>
      <div className="px-6 mb-2 text-center">
        {ingredientLines?.slice(0, 2)?.map((item, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {item.length > 15 ? `${item.slice(0, 15)}...` : item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RecipeCard;
