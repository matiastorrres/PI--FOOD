import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { Link } from "react-router-dom";
import { getAllDiet } from "../../redux/actions";

// const handleChange = (e) => {
//     setInput({...input,[e.target.name] : e.target.value});

//     setErrors(validate({...input, [e.target.name] : e.target.value}))
// }   

// const validate= (input) =>{
//     const errors={};
//     const string = /^[A-Z]/  //verificar esto
//     if(!string.test(input.title) || !input.title) errors.title= "este campo es obligatorio y tiene que empezar con mayuscula" 
//     else errors.title= ""
//     return errors;
// }

function Create (){

const [input, setInput] = useState({
    title: "",
    summary:"",
    HealthScore: 0,
    image:"",
    steps: [],
    diets:[]

})

const [errors, setErrors]=useState({})

const dispatch = useDispatch()
const diets = useSelector(state => state.diets);

useEffect(()=>dispatch(getAllDiet()), [dispatch])


function validateTitle (value) {
    setInput({...input, title:value});
    const string = /^[A-Z]/  //verificar esto
    if(!string.test(value) || !value) setErrors({...errors, title: "este campo es obligatorio y tiene que empezar con mayuscula"})
    else setErrors({...errors, title:""})
}


function validateSummary (value) {
    setInput({...input, summary:value});
    const string = /^[A-Z]/  //verificar esto
    if(!string.test(value) || !value) setErrors({...errors, summary: "este campo es obligatorio y tiene que empezar con mayuscula"})
    else setErrors({...errors, summary:""})
}

function validateHealthScore (value) {
    setInput({...input, HealthScore: value});
    if(!value || value<0 || value>100) setErrors({...errors, HealthScore: "este campo es obligatorio Y tiene que ser un nro entre 0 y 100"})
    else setErrors({...errors, HealthScore:""})
}
function validateImg(value) {
    setInput({...input, image: value});
    const img = /(https?:\/\/.*\.(?:png|jpg))/
    if(!img.test(value)) setErrors({...errors, image: "URL no valida"})
    else setErrors({...errors, image:""})
}

function handleCheck(e){
    if(input.diets.includes(e.target.value)) setInput({...input, diets: input.diets.filter(el=>el !==e.target.value)})
    if(e.target.checked) setInput({...input, diets:[...input.diets, e.target.value]})
}

const onSubmit = (e)=>{
    e.preventDefault();
    console.log(input)
}


return(
    <>
    <Link to ="/home">
    <button>Home</button>
    </Link>
    <form onSubmit={onSubmit}>
        <br></br>
        <div>
            <label>Title: </label>
            <input type="text" name="title" value={input.title} placeholder = "ej:pizza" maxLength="255" onChange={(e)=>validateTitle(e.target.value)} />
            {errors.title? <div>{errors.title}</div> : null} 
        </div>
        <div>
            <label>Summary: </label>
            <textarea type="text" name="summary" value={input.summary} onChange={(e)=>validateSummary(e.target.value)}/>
            {errors.summary? <div>{errors.summary}</div> : null}
        </div>
        <div>
            <label>Health score: </label>
            <input type="number" min="0" max="100" name="HealthScore" value={input.HealthScore} onChange={(e)=>validateHealthScore(e.target.value)}/>
            {errors.HealthScore? <div>{errors.HealthScore}</div> : null}
        </div>
        <div>
            <label>Image: </label>
            <input type="text" name="image" value={input.image} onChange={(e)=>validateImg(e.target.value)}/>
            {errors.image? <div>{errors.image}</div> : null}
        </div>
        <div>
            <div>Diets</div>
            {diets && diets.map(el=>{ return (<label key={el}> <input type="checkbox" value={el} onChange={e=>handleCheck(e)}/>{el}</label>) })}
        </div>
        <div>
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