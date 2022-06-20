const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true    // es una constraints, primaryKey=>significa que no puede ser null y unico
    },
    title:{
      type: DataTypes.STRING,
      allowNull:false  // es una constraints, si o si tiene que tener el title, se representa con *
    },
    summary:{
      type: DataTypes.TEXT,
      allowNull: false 
    },
    healthScore:{
      type: DataTypes.INTEGER,
    },
    steps:{
      type: DataTypes.STRING,
    },
    dishTypes:{
      type: DataTypes.STRING,
    },
    img:{
      type:DataTypes.STRING,
    },    
  },{
    timestamps:false
});
};
