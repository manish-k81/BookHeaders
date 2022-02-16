import { useState } from "react";
import useFetch from "./useFetch"

const Contact=()=>{
    const [ name , setName ] = useState('')
    // const [ review , setReview ] = useState('')

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
            <p>{name}</p>
            <div className="reviewMessage">
                <p onChange={(e)=>setName(e.target.value)}>Write a review:</p>
                <textarea type="text" required></textarea>
            </div>
        </div>
    )
}
export default Contact;