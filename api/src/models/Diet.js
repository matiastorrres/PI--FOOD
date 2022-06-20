const { DataTypes } = require("sequelize");

module.exports= (sequelize) =>{
    sequelize.define("diet",{
        name:{
            type: DataTypes.STRING, 
        }
    },{
        timestamps:false
    })
}

//nota tratar de hacer los modelos de la forma en la que sale en los pdf de mati monas, minuto 21
//enteder la diferencia de como hacer una y otra