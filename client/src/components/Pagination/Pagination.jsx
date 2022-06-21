const Pagination = ({recipePerPage, total, handlePage})=>{

const paginated = []
let numbers = Math.ceil(total/recipePerPage)
for(let i=1; i<=numbers;i++){
    paginated.push(i)
}
    return(
            <nav>
                <ul>
                {paginated.map(e=>(
                    <button key = {e} onClick={()=>handlePage(e)}>{e}</button>
                ))}
                </ul>
            </nav>       
    )
}

export default Pagination;