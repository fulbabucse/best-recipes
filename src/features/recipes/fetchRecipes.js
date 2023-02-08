import axios from "../../utils/axios.config";

export const fetchRecipes = async (name) => {
  const data = await axios.get(`/recipes?name=${name}`);
  return data.data;
};

export const fetchSingleRecipe = async (id) => {
  const data = await axios.get(`/recipes/${id}`);
  return data.data;
};
