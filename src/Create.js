import { useState } from "react";
import { useHistory } from "react-router-dom"

const Create = () =>{

    const [ title,setTitle ] = useState('');
    const [ body,setBody ] = useState('');
    const [ author,setAuthor ] = useState('');
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault()
        const blog = {title,body,author}
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":" application/JSON"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log("NEW BLOG HAS BEEN ADDED")
            history.push('/')
        })
    }

    return(
        
        <div className="create">
            <h2>Add a new Blog here</h2>
            <form className="formList" onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type='text'required value={title}  onChange={(e)=>setTitle(e.target.value)}/>
                
                <label>Blog Body:</label>
                <textarea type='text'required value={body}  onChange={(e)=>setBody(e.target.value)}></textarea>

                <label>Blog author:</label>
                <input type="text" required  value={author} onChange={(e)=>setAuthor(e.target.value)} />

                <button>Add Blog</button>
            </form>
        </div>
    )
}

export default Create;