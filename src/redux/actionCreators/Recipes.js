import axios from "axios";

const getUrl = process.env.REACT_BASE_URL;

export const getRecipeCreator = () => {
    const headers = {};
    return {
        type: "GEt_ALL_RECIPES",
        payload: axios.get(getUrl + "/recipes" , { headers }),
    };
};

export const getSingleRecipe = (id) => {
    return {
        type: "GET_SINGLE_RECIPE",
        payload: axios.get(getUrl + "/recipe" + id),
    }
}