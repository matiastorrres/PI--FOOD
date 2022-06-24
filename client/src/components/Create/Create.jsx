import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getAllDiet } from "../../redux/actions";
function Create (){
const [input, setInput] = useState({
    title: "",
    summary:"",
    HealthScore: 0,
    image:"",
    steps: [],
    diets:[]

})

const [error, setError]=useState("")

const dispatch = useDispatch()
const diets = useSelector(state => state.diets);

useEffect(()=>dispatch(getAllDiet()), [dispatch])


function validateTitle (value) {
    const string = /^[A-Z]/  //verificar esto
    if(!string.test(value))setError("tiene que empezar con mayusculas") 
    else setError("")
    setInput({...input, title:value})
}

function validateSummary (value) {
    const string = /^[A-Z]/  //verificar esto
    if(!string.test(value))setError("tiene que empezar con mayusculas") 
    else setError("")
    setInput({...input, summary:value})
}

function validateHealthScore (value) {
    const string = /^[A-Z]/  //verificar esto
    if(!string.test(value))setError("tiene que empezar con mayusculas") 
    else setError("")
    setInput({...input, HealthScore:value})
}



let onSubmit = (e)=>{
    e.preventDefault();
    console.log(input)
}


    return(
        <>
        <form onSubmit={onSubmit}>
            <br></br>
            <div>
                <label>Title: </label>
                <input type="text" 
                name="title" 
                value={input.title} 
                placeholder = "ej:pizza"
                maxLength="255"
                onChange={(e)=>validateTitle(e.target.value)} 
                key={1}/>
                {error? <div>{error}</div> : null}
            </div>
             <div>
                <label>Summary: </label>
                <textarea type="text" 
                name="summary" 
                value={input.summary} 
                onChange={(e)=>validateSummary(e.target.value)} 
                key={2}/>
                {error? <div>{error}</div> : null}
            </div>
            <div>
                <label>Health score: </label>
                <input 
                type="number" 
                min="0" 
                max="1000" 
                name="score" 
                value={input.HealthScore} 
                onChange={(e)=>validateHealthScore(e.target.value)} 
                key={3}/>
            </div>
            <div>
                <label>Image: </label>
                <input type="text" name="image"  key={4}/>
            </div>
            <div>
                <select >
                <option value="all">Diets</option>
                {diets && diets.map(e=>{
                    return(
                        <option value={e} key={e}>{e}</option>
                    )
                })
                }
                </select>
                <label>Steps: </label>
                <input type="text" name="steps"/>
            </div> 
            <div>
                <input type="submit"/>
            </div>
        </form>
        </>
    )
}
export default Create