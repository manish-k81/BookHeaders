import useFetch from "./useFetch"

const Contact=()=>{
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
        </div>
    )
}
export default Contact