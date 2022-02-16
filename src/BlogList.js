import { Link, useHistory } from "react-router-dom"

const BlogList = (props) =>{
    
    return(
        <div className="blog-list">
        <h1>{props.title}</h1>
            {
                props.blogs.map((blog)=>(
                    <div className="list-blog" key={blog.id}>
                    <Link to = {`blog/${blog.id}`} className="blogLink">
                        <div className="BlogView">
                        <h3> - {blog.title}</h3>
                        <p>Written by - {blog.author}</p>
                        </div>
                    </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default BlogList