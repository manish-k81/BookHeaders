import { useEffect, useState } from "react";
import useFetch from "./useFetch"

const Contact=()=>{
    const [ title , setTitle ] = useState('')
    const [ body , setBody ] = useState('')

    const onSubmit = (e) =>{
        // e.preventDefault()
        const review = { title ,body }
        fetch('http://localhost:7999/contact',{
            method:"POST",
            headers:{"Content-Type":"application/JSON"},
            body:JSON.stringify(review)
        }).then(()=>{
            console.log("Comment posted")
        })
    }


    const {data:contacts,isPending, error} = useFetch('http://localhost:7999/contact');
    return(
        <div className="reviewSection">
            {isPending && <h2 className='lazyload'>Loading ... </h2>}
            {error && <h2 className='errorMessage'>{error}</h2>}
            <h1 className="reviewHeading">Reviews</h1>
            {contacts && (
                contacts.map(contact=>(
                    <div className="myContact" key={contact.id}>
                        <h2>{contact.title}</h2>
                        <p>- {contact.body}</p>
                    </div>
                ))
            )
            }
            <form className="reviewMessage" onSubmit={onSubmit}>
                <h3>Write a review:</h3>

                <label>Name:</label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>

                <label>Comments:</label>
                <textarea type="text" required value={body} onChange={(e)=>{setBody(e.target.value)}}></textarea>
                <button>Submit</button>
                <p>{title}</p>
                <p>{body}</p>
            </form>
        </div>
    )
}
export default Contact;