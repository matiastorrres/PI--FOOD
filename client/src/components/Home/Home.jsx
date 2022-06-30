import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { useEffect, useState } from "react";
import { getAllRecipe } from "../../redux/actions/index"
import CardRecipe from "../CardRecipe/CardRecipe";
import Pagination from "../Pagination/Pagination";
import Menu from "../Menu/Menu";

function Home () {

const dispatch = useDispatch(); //si
const recipes = useSelector(state => state.recipes);

const [order, setOrder]= useState("")
const [currentPage,setCurrentPage] = useState(1);
const [recipePerPage] = useState(9);
//get current posts
const indexOfLastCard = currentPage * recipePerPage;
const indexOfFisrtCard = indexOfLastCard - recipePerPage;
const currentRecipe = recipes.slice(indexOfFisrtCard, indexOfLastCard);

//change page

const handlePage = (number)=> setCurrentPage(number);

useEffect(()=>{
    dispatch(getAllRecipe());
},[dispatch])


    return (
        <>
        <h1>Food</h1>
        <Menu setCurrentPage={setCurrentPage} setOrder={setOrder} order={order}/> 
        <Pagination recipePerPage={recipePerPage} total={recipes.length} handlePage={handlePage}/>
        <CardRecipe currentRecipe={currentRecipe} />
        <Pagination recipePerPage={recipePerPage} total={recipes.length} handlePage={handlePage}/>
        </>
    )
}

export default Home;