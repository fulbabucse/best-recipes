import axios from "../../utils/axios.config";

const fetchRecipes = async () => {
  const data = await axios.get(`/recipes`);
  return data.data;
};

export default fetchRecipes;
