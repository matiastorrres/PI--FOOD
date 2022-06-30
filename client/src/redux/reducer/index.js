import {GET_ALL_RECIPE, GET_ALL_DIET, FILTER_BY_DIET, ORDER_ALPHABETICALLY, ORDER_SCORE, DETAIL, GET_BY_NAME} from "../typeActions"

const initialState={
    recipes:[],
    aux:[],
    diets:[],
    detail: {}
}

const rootReducer = (state = initialState, action )=>{
    switch(action.type){
        case GET_ALL_RECIPE:
            return {...state, recipes: action.payload, aux: action.payload}

        case GET_BY_NAME:
            return {...state, recipes:action.payload}
            
        case GET_ALL_DIET:
            return {...state, diets:action.payload}

        case FILTER_BY_DIET:
            console.log("recibo",action.payload)
            const aux = state.aux;
            console.log("todo el estado", aux)
            const filterAux = action.payload === "all"? aux : aux.filter(e=>e.diets?.includes(action.payload)) 
            console.log("FILTRO",filterAux)                       
            return {...state, recipes: filterAux }
        
        case ORDER_ALPHABETICALLY:
            console.log(action.payload)
            const recipesOrder = action.payload === 'az' ?
            state.recipes.sort((a, b) => {
                if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
                if (b.title.toLowerCase() > a.title.toLowerCase()) return -1;
                return 0;
            }) :
            state.recipes.sort((a, b) => {
                if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
                if (b.title.toLowerCase() < a.title.toLowerCase()) return -1;
                return 0;
            });
            console.log(recipesOrder)
            return {...state,
                recipes: action.payload === "order" ? state.aux : recipesOrder };
        case ORDER_SCORE:
            const hightToLowRecipes = action.payload === "low"?
            state.recipes.sort((a, b) => a.healthScore - b.healthScore): state.recipes.sort((a, b) => b.healthScore - a.healthScore);
            return {
                ...state,
                recipes: action.payload === "all" ? state.recipes : hightToLowRecipes};
        case DETAIL:
            return {...state, detail:action.payload}
        default: return {...state}
    }
};

export default rootReducer;