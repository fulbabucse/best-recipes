import axios from "../../utils/axios.config";

export const fetchRecipes = async () => {
  const data = await axios.get(`/recipes`);
  return data.data;
};

export const fetchSingleRecipe = async (id) => {
  const data = await axios.get(`/recipes/${id}`);
  return data.data;
};
