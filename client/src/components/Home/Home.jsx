import {useDispatch, useSelector} from "react-redux"
import { useEffect, useState } from "react";
import {getAllRecipe} from "../../redux/actions/index"
import CardRecipe from "../CardRecipe/CardRecipe";
import Pagination from "../Pagination/Pagination";

const Home = ()=>{
const [loading, setLoading] = useState(false);
const [currentPage,setCurrentPage] = useState(1);
const [recipePerPage] = useState(9);



const dispatch = useDispatch();
const recipes = useSelector(state => state.recipes);
    
useEffect(()=>{
    setLoading(true);
    dispatch(getAllRecipe());
    setLoading(false);
    
},[dispatch])
  
//get current posts
const indexOfLastCard = currentPage * recipePerPage;
const indexOfFisrtCard = indexOfLastCard - recipePerPage;
const currentRecipe = recipes.slice(indexOfFisrtCard, indexOfLastCard);

//change page

const handlePage = (number)=> setCurrentPage(number);

    return (
        <>
        <h1>Food</h1>
        <Pagination recipePerPage={recipePerPage} total={recipes.length} handlePage={handlePage}/>
        <CardRecipe currentRecipe={currentRecipe} loading={loading}/>
        <Pagination recipePerPage={recipePerPage} total={recipes.length} handlePage={handlePage}/>
        </>
    )
}

export default Home;