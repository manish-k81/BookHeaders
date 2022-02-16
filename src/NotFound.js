import { Link } from "react-router-dom"

const NotFound =()=>{
    return(
        <div className="notFound">
            <h1>404 Page not found.....</h1>
            <Link to = '/'>
            <h3>Click here to go back to the Home Page</h3>
            </Link>
        </div>
    )
}

export default NotFound;
