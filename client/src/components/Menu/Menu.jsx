import { useEffect, useState  } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllDiet, filterByDiet, orderAlphabetically, orderScore,getByName} from "../../redux/actions/"

function Menu ({setCurrentPage,setOrder,order}) {
const dispatch = useDispatch();
const diets = useSelector(state=>state.diets);

const [name, setName]= useState("")

useEffect(()=>{
    dispatch(getAllDiet());
}, [dispatch]);


function handleFilterBydiets (e){
    e.preventDefault();
    dispatch(filterByDiet(e.target.value));
    
}

function handleOrder(e){
    e.preventDefault();
    dispatch(orderAlphabetically(e.target.value));
    setCurrentPage(1)
    setOrder(`order ${e.target.value}`)
    console.log(order)
}

function handlerScore(e){
    e.preventDefault();
    dispatch(orderScore(e.target.value));
    setCurrentPage(1);
    setOrder(`order ${e.target.value}`)
    console.log(order)
}

function handleSubmit(e){
  e.preventDefault();
  dispatch(getByName(name));
}
    return(
        <>
        <div>menu</div>
        <div>
            <input type="text" placeholder="recipes.." value={name} onChange={e=>setName(e.target.value)}/>
            <button type="submit" onClick={e=>handleSubmit(e)} >Search</button>
        </div>
        <select onChange={e=>handleFilterBydiets(e)}>
            <option value="all">Diets</option>
            {diets && diets.map(e=>{
            return <option value={e} key={e}>{e}</option>})}

        </select>
        <select onChange={e=>handleOrder(e)}>
            <option value="order">Alphabetical order</option>
            <option value="az">a-z</option>
            <option value="za">z-a</option>
        </select> 
        <select onChange={e=>handlerScore(e)}>
            <option value="all">Health Score</option>
            <option value="low">Low</option>
            <option value="tall">Tall</option>
        </select> 
        </>
    )
}

export default Menu