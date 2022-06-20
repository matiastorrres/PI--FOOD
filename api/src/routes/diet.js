const {Router} = require("express");
const router = Router();
const { Diet } = require('../db.js')
router.get("/", async (req,res)=>{
    try {
        const diets = await Diet.findAll({
            attributes:["name"]
        })
        //diets.map(e=>console.log(e.toJson())) practicar este console.log no me sale
        res.status(200).json(diets)
    } catch (error) {
        console.log(error)
    }
})


module.exports = router