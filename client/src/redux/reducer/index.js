import {GET_ALL_RECIPE,GET_ALL_DIET,FILTER_BY_DIET, DETAIL} from "../typeActions"

const initialState={
    recipes:[],
    auxRecipes:[],
    diets:[],
    detail: {}
}

const rootReducer = (state = initialState, action )=>{
    switch(action.type){
        case GET_ALL_RECIPE:
            return {...state, recipes: action.payload, auxRecipes:action.payload}
        case GET_ALL_DIET:
            return {...state, diets:action.payload}
        case FILTER_BY_DIET:
            console.log(action.payload)
            const aux = state.auxRecipes;
            console.log(aux)
            const filter = action.payload === "all"? aux : aux.filter(e=>e.diets.includes(action.payload))
            console.log(filter)                            
            return {state, recipes: filter }
        case DETAIL:
            return {...state, detail:action.payload}
        default: return {...state}
    }
};

export default rootReducer;