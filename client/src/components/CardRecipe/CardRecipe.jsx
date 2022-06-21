function CardRecipe ({currentRecipe,loading}){
  if(loading){
    return (<div>loading...</div>)
  }
    return(
        <> 
           {
            currentRecipe.map(e=>{
              return(
              <div key={e.id}>
              <img src = {e.img} alt ="food"/>
              <h2>{e.title}</h2>
              {e.diets[0].name? <div >{e.diets.map((e,i)=><div key={i}>{e.name+' '}<span> &nbsp;  </span> </div>)}</div> : 
              <div >{e.diets.map((e,i)=><div key={i}>{e+' '}<span> &nbsp;  </span> </div>)}</div> } 
              </div>
              )
            })}  
        </>
    )
}
export default CardRecipe;
