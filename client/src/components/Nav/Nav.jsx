import { Link } from "react-router-dom";
const Nav = () => {
    return(
        <>
        <Link to = "/home">
        <div><button>Home</button></div>
        </Link>
        <Link to = "/home/create">
        <div>Create your own recipe</div>
        </Link>
        </>
    )
}
export default Nav;