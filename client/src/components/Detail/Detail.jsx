import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../redux/actions";
function Detail (){

const detail = useSelector(state=>state.detail);
const dispatch = useDispatch();
const {id} = useParams();

useEffect(()=>dispatch(getDetail(id)),[dispatch,id])


    return(
        <>

        <div>{detail.title}</div>
        <img src= {detail.img} alt= "img"/>
        <div>{detail.dishTypes && detail.dishTypes.map(e=>{
            return(
                <p key={e}>{e}</p>
            )
        })}</div>
        <div>{detail.diets && detail.diets.map(e=>{
            return(
                <div key={e}>{e}</div>
            )
        })}</div>
        <div>{detail.healthScore}</div>
        <div>{detail.steps && detail.steps.map(e=>{
            return(
                <div key={e}>{e}</div>
            )
        })}</div>
        <div>{detail.summary && detail.summary.replace(/<[^>]+>/g, '')}</div> 
        </>
        
    )
}

export default Detail;

//atencion estudiar el metodo replace