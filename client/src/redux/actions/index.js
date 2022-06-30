import {GET_ALL_RECIPE, DETAIL, ORDER_ALPHABETICALLY, GET_ALL_DIET, FILTER_BY_DIET, ORDER_SCORE, GET_BY_NAME} from "../typeActions"

export function getAllRecipe(){
    return function(dispatch){
     return fetch("http://localhost:3001/recipe")
      .then(res=>res.json())
      .then(recipes => dispatch({type:GET_ALL_RECIPE, payload:recipes}))
      .catch(error=>console.log(error));
    }
}

export function getByName(name){
  return function(dispatch){
    return fetch(`http://localhost:3001/recipe?name=${name}`)
    .then(res => res.json())
    .then(recipes => dispatch({type:GET_BY_NAME, payload: recipes}))
    .catch(error=>console.log(error))
  }
}

export function getAllDiet(){
  return function(dispatch){
    return fetch("http://localhost:3001/diet")
    .then(res=>res.json())
      .then(diets => dispatch({type:GET_ALL_DIET, payload:diets}))
      .catch(error=>console.log(error));
    }
  }


export function filterByDiet(payload){
  return {type:FILTER_BY_DIET, payload}
}

export function getDetail (id){
  return function(dispatch){
    return fetch(`http://localhost:3001/recipe/${id}`)
    .then(res=>res.json())
    .then(detail=>dispatch({type:DETAIL, payload: detail}))
  }
}

export function orderAlphabetically(payload){
  return {type:ORDER_ALPHABETICALLY, payload}
}

export function orderScore(payload){
  return {type:ORDER_SCORE, payload}
}
