const {sequelize,Op} = require("sequelize");
const axios = require("axios");
const {YOUR_API_KEY} = process.env;
const {Recipe, Diet} = require("../db")

const recipeApi = async ()=>{
const {data} = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=0a5302613c0a48ea9b8e1614899a70c2&number=10&addRecipeInformation=true`)
const api = data.results.map(e=>{
    return {
        id: e.id, 
        title:e.title,  //string
        // summary:e.summary, //text 
        // healthScore:e.healthScore, //es un nro
        // steps: e.analyzedInstructions[0]?.steps.map(e=>e.step), //es un array de string
        img: e.image, //string
        // dishTypes:e.dishTypes, //es un array de string
        diets:e.diets, //es un array de string
    }    
})
return api
}


const recipeDb = async ()=>{
const db = await Recipe.findAll({
    attributes:["title","id","img"],
    include: [{
        model : Diet,
        attributes:["name"],  
        through:{attributes:[]}
    }]    
})

return db
}


const detailsApi = async (id)=>{
const {data} = await axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=5c617fc56c8d4cd884b80e72e8a5b10d`)
const  resultado ={
    title:data.title,
    img: data.image,
    dishTypes:data.dishTypes,
    diets:data.diets,
    summary:data.summary,
    healthScore:data.healthScore,
    steps: data.analyzedInstructions[0]?.steps.map(e=>e.step)}
return resultado
}

const detailsDb = async(id)=>{
    const resultado = await Recipe.findByPk(id,{
        include: [{
            model : Diet,
            attributes:["name"],  
            through:{
                attributes:[]
            }
        }] 
    })
    return resultado
}

const union = async ()=>{
    const arra1=await recipeDb()
    const arra2=await recipeApi()
    const  array = [...arra1,...arra2]
    return array
}

const findRecipe = async (name)=>{
    const filter = await Recipe.findAll({
        where:{
            title:{[Op.like]:`%${name}%`}
        },
        include: [{
            model : Diet,
            attributes:["name"],  
            through:{
                attributes:[]
            }
        }]  
    })
    return filter
}


module.exports= {
recipeApi,
detailsApi,
recipeDb,
union,
findRecipe,
detailsDb
}