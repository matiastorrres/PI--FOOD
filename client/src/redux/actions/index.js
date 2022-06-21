import {GET_ALL_RECIPE} from "../typeActions"
export function getAllRecipe(){
    return function(dispatch){
     return fetch("http://localhost:3001/recipe")
      .then(res=>res.json())
      .then(recipes => dispatch({type:GET_ALL_RECIPE, payload:recipes}))
      .catch(error=>console.log(error))
    }
}

