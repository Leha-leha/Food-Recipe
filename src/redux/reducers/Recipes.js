const initialState = {
    recipeData: {},
    err: {},
    isPending: false ,
    isFullfilled: false,
    isRejected: false,
    singleRecipe: {},
}

const recipeReducer = (prevState = initialState , action) => {
    switch (action.type) {
        case "GET_ALL_RECIPES_PENDING":
            return{
                ...prevState,
                isPending: true,
                isRejected: false,
                isFullfilled: false,
            }
            case "GET_ALL_RECIPES_REJECTED":
            return{
                ...prevState,
                isPending: false,
                isRejected: true,
                err:action.payload,
            };
            case "GET_ALL_RECIPES_FULLFILED":
                return{
                    ...prevState,
                    isPending: false,
                    isFUllfiled: true,
                    recipesData: action.payload.data,
                };
                case "GET_SINGLE_RECIPE_PENDING":
                    return{
                        ...prevState,
                        isPending: true,
                        isRejected: false,
                        isFullfilled: false,
                    };
                case
                "GET_SINGLE_RECIPE_REJECTED":
                return{
                    ...prevState,
                    isPending: false,
                    isRejected: true,
                    err:action.payload,
                };
                case 
                "GET_SINGLE_RECIPE_FULLFILLED":
                default:
                return{
                    ...prevState,
                };
    }
};

export default recipeReducer;