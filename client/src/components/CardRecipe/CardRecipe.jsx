import { Link } from "react-router-dom";

function CardRecipe ({currentRecipe}){

    return(
        <> 
           {
            currentRecipe.map(e=>{
              return(
              <div key={e.id}>
              <img src = {e.img} alt ="food"/>
              <Link to ={`/home/${e.id}`} >
              <h2>{e.title}</h2>
              </Link>
              <div >{e.diets}</div>
              <div>{e.healthScore}</div>
              </div>
              )})
           }  
        </>
    )
}
export default CardRecipe;
