import { useHistory, useParams } from "react-router-dom";
import Blog from "./Blog";
import useFetch from "./useFetch";

const BlogDetail = ()=>{
    const { id } = useParams()
    const { data,isPending,error} = useFetch(`http://localhost:8000/blogs/${id}`)
    const history = useHistory()

    const clickHandle=()=>{
        fetch('http://localhost:8000/blogs/' + data.id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/')
        })
    }
    return(
        <div>
            {isPending && <h2 className='lazyload'>Loading ... </h2>}
            {error && <h2 className='errorMessage'>{error}</h2>}
            {data &&
            <div className="blogDetails">
                <h1>{data.title}</h1>
                <p>Written by "{data.author}"</p>
                <p>{data.body}</p>
                <button onClick={clickHandle}>Delete</button>
            </div>
            }
        </div>
    )
}

export default BlogDetail;