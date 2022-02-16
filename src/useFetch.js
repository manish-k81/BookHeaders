import { useState, useEffect } from "react"
const useFetch = (url) =>{
    const [data,setData] = useState(null)
    const [isPending,setIsPending] = useState(true)
    const [error, setError] = useState(null)
    useEffect(()=>{
        const abortCont = new AbortController() // This is used for Cleanup to cancel the fetch request
        setTimeout(()=>{
            // console.log(abortCont.signal,"this is signal")
        fetch(url,{signal:abortCont.signal})
        .then(res =>{        // This Block will only execute if there the res.ok is false otherwise go to next then
            if(!res.ok){
                throw Error("Could not fetch the resource...")
            }
            return res.json() 
        })
        .then(data=>{
            setData(data)
            setIsPending(false)
            setError(null)
            })
        .catch(err=>{
            if(err.name === 'AbortError'){
                console.log("Fetch Aborted")
            }else{
                setIsPending(false)
                setError(err.message)
            }
        })
        },100) 

        return ()=> abortCont.abort() // CleanUp Function
    },[url])
    return {data,isPending,error}
}

export default useFetch;
