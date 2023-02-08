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

  const { category, label, image, healthLabels, ingredients } = recipe;

  return (
    <div className="w-full lg:max-w-5xl mx-auto my-5 shadow-lg p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-content-center place-items-center">
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

      <div>
        <h2 className="text-lg font-medium text-gray-600 capitalize italic mt-3">
          Ingredient and Instruction
        </h2>
        <div>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full border text-center">
                    <thead className="border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-3 py-1 border-r"
                        >
                          SN.
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-3 py-1 border-r"
                        >
                          Ingredient Name
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-3 py-1 border-r"
                        >
                          Ingredient Category
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-3 py-1"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-3 py-1"
                        >
                          Weight
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-3 py-1"
                        >
                          Image
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {ingredients?.map((ingredient, index) => (
                        <tr key={index} className="border-b">
                          <td className="px-3 py-1 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                            {index + 1}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-3 py-1 whitespace-nowrap border-r">
                            {ingredient.food}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-3 py-1 whitespace-nowrap border-r">
                            {ingredient.foodCategory}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-3 py-1 whitespace-nowrap">
                            {ingredient.quantity}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-3 py-1 whitespace-nowrap capitalize">
                            {ingredient.weight.toFixed(2)}
                            <span className="mx-2">{ingredient.measure}</span>
                          </td>
                          <td className="text-sm text-gray-900 font-light px-3 py-1 whitespace-nowrap">
                            <img
                              className="w-10 h-10 rounded-full"
                              src={ingredient.image}
                              alt={ingredient.food}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
