import {GET_ALL_RECIPE} from "../typeActions"
const initialState={
    recipes:[]
}
const rootReducer = (state = initialState, action )=>{
    switch(action.type){
        case GET_ALL_RECIPE:
            return {...state, recipes: action.payload}
        default: return {...state}
    }
};

export default rootReducer;