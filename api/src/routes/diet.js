const {Router} = require("express");
const router = Router();
const { Diet } = require('../db.js')
router.get("/", async (req,res)=>{
    try {
        const diets = await Diet.findAll({
            attributes:["name"]
        })
        const resp = await diets.map(e=>e.name)
        //diets.map(e=>console.log(e.toJson())) practicar este console.log no me sale
        return res.status(200).json(resp)
    } catch (error) {
        console.log(error)
    }
})


module.exports = router