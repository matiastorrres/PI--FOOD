import React from "react";
import {Link} from "react-router-dom"
const LandingPage = () => {
    return (
        <>
        <Link to="/home">
          <button>Welcome</button>
        </Link>
        </>
    )
}

export default LandingPage;