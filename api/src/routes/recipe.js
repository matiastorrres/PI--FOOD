const {Router} = require("express")
const router= Router()
const { detailsApi, union, findRecipe, recipeApi, detailsDb} = require("../controllers/recipe")
const {Recipe,Diet} = require("../db")

router.get("/", async(req,res)=>{
    try {
        const {name} = req.query;
        console.log(name)
        if(name){
          const filterdb = await findRecipe(name);
          const api = await recipeApi();
          const filterApi = api.filter(e=>e.title.toLowerCase().includes(name.toLowerCase()));
          const join = [...filterdb,...filterApi]
          filterdb.length>0 || filterApi.length>0? res.status(200).json(join) : res.status(404).json("no related recipes found")
        }else{
          const allRecipes = await union()
          return res.status(200).json(allRecipes)
        }
    } catch (error) {
        console.log(error)
    }
});

router.get("/:id", async(req,res)=>{
  try {
    const {id}= req.params;
    console.log(typeof id) //tener en cuenta que todo lo que se recibe por params llega como string
    const expReg = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;
    if(expReg.test(id)){
       const resultado = await detailsDb(id);
       resultado? res.status(200).json(resultado) : res.status(400).json("the id does not exist");
    }else {
      const resultado = await detailsApi(id);
      resultado? res.status(200).json(resultado) : res.status(400).json("the id does not exist");
    }
  } catch (error) {
    console.log(error)
  }
});

router.post("/", async (req,res)=>{
  try {
    const {diets,title,summary,steps,img,healthScore,dishTypes} = req.body
    if(!title || ! summary) return res.status(404).json("el titulo y el resumen de la receta son datos obligatrios")
    const [obj,create] = await Recipe.findOrCreate({
      where:{title:title},
      defaults:{
        title,
        summary,
        steps,
        img,
        healthScore,
        dishTypes
      }
    });
   // console.log("acaaaa",obj)
    if(!create) return res.status(400).json("existing recipe name")
    
  
    else {
      //await obj.setDiets(diets)
       const dietsDb = await Diet.findAll({
         where: {name: diets}
     })
      await obj.addDiets(dietsDb)
    return res.status(200).json("the recipe was created successfully")
    }
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;