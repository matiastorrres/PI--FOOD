import { useEffect,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllDiet} from "../../redux/actions/"

function Menu () {
const dispatch = useDispatch();
const diets = useSelector(state=>state.diets);

useEffect(()=>dispatch(getAllDiet()), [dispatch]);

    return(
        <>
        <div>menu</div>
        <div>
            <input type="text" placeholder="recipes.."/>
            <button type="submit">Search</button>
        </div>
        <select >
            <option value="all">Diets</option>
            {diets && diets.map(e=>{
                return(
                    <option value={e} key={e}>{e}</option>
                )
            })
            }
        </select>
        <select>
            <option value="all">Alphabetical order</option>
            <option value="upward">a-z</option>
            <option value="falling">z-a</option>
        </select> 
        <select>
            <option value="all">Health Score</option>
            <option value="low">Low</option>
            <option value="tall">Tall</option>
        </select> 
        </>
    )
}

export default Menu