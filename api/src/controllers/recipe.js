const sequelize = require("sequelize");
const axios = require("axios");
const {YOUR_API_KEY} = process.env;

const recipeApi = async ()=>{
const {data} = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=0a5302613c0a48ea9b8e1614899a70c2&number=10&addRecipeInformation=true`)
const api = data.results.map(e=>{
    return {
        id: e.id,
        title:e.title,
        summary:e.summary,
        healthScore:e.healthScore,
        steps: e.analyzedInstructions[0]?.steps.map(e=>e.step),
        img: e.image,
        dishTypes:e.dishTypes,
        diets:e.diets,
    }    
})
return api
}









module.exports= {
recipeApi
}