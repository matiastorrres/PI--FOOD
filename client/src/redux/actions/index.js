import {GET_ALL_RECIPE, GET_ALL_DIET,FILTER_BY_DIET,DETAIL} from "../typeActions"

export function getAllRecipe(){
    return function(dispatch){
     return fetch("http://localhost:3001/recipe")
      .then(res=>res.json())
      .then(recipes => dispatch({type:GET_ALL_RECIPE, payload:recipes}))
      .catch(error=>console.log(error));
    }
}

export function getAllDiet(){
  return async (dispatch)=>{
  try {
      const res = await fetch("http://localhost:3001/diet");
      const diets = await res.json();
      return dispatch({type:GET_ALL_DIET, payload:diets});
  } catch (error) {
     return console.log (error);
    }
  }
}

export function filterByDiet(diet){
  return{type:FILTER_BY_DIET, payload:diet}
}

export function getDetail (id){
  return function(dispatch){
    return fetch(`http://localhost:3001/recipe/${id}`)
    .then(res=>res.json())
    .then(detail=>dispatch({type:DETAIL, payload: detail}))
  }
}
