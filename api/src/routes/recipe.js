const {Router, response} = require("express")
const router= Router()
const {recipeApi} = require("../controllers/recipe")

router.get("/", async(req,res)=>{
    try {
        const resultado = await recipeApi();
        const {name} = req.query;
        console.log(name)
        if(name){
            const filter = resultado.filter(e=>e.title.toLowerCase().includes(name.toLowerCase()));
            filter.length? res.status(200).json(filter) : res.status(400).json("no related recipes found");
        }else{
        return res.json(resultado)
        }
    } catch (error) {
        console.log(error)
    }
})

router.get("/:id", (req,res)=>{
  try {
    
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;