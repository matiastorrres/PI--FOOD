const {sequelize,Op} = require("sequelize");
const axios = require("axios");
const {YOUR_API_KEY} = process.env;
const {Recipe, Diet} = require("../db")

const recipeApi = async ()=>{
const {data} = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b0d35a1b1caa4840824d479236691794&number=10&addRecipeInformation=true`)
const api = data.results.map(e=>{
    return {
        id: e.id, 
        title:e.title,  //string
        // summary:e.summary, //text 
        healthScore:e.healthScore, 
        // steps: e.analyzedInstructions[0]?.steps.map(e=>e.step), //es un array de string
        img: e.image, //string
        // dishTypes:e.dishTypes, //es un array de string
        diets:e.diets.join(", "), //es un array de string
    }    
})
return api
}


const recipeDb = async ()=>{
const db = await Recipe.findAll({
    attributes:["title","id","img","healthScore"],
    include: [{
        model : Diet,
        attributes:["name"],  
        through:{attributes:[]}
    }]
})
const resp = await db.map(e=>{
    return{
        title:e.title,
        img:e.img,
        id:e.id,
        diets:e.diets.map(e=>e.name).join(", "),
        healthScore:e.healthScore
    }    
})
return resp
}


const detailsApi = async (id)=>{
const {data} = await axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=b0d35a1b1caa4840824d479236691794`)
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
    const resp = await resultado.map(e=>{
        return{
            title:e.title,
            img:e.img,
            id:e.id,
            diets:e.diets.map(e=>e.name)
        }    
    })
    return resp
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