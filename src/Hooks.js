import {React,  useEffect, useState } from 'react'

function Hooks() {
    const [change,setChange] = useState("");
    const [value,setValue] = useState(0);

    function onChnageHandler(e){
        setChange(e.target.value)
    }

    function onClickHandler(){
        setValue(prevVal=>prevVal+1)
    }

    useEffect(()=>{
        console.log("will render everytime")
    })

    useEffect(()=>{ 
        console.log("Will only render initial and not after that")
    },[])

    useEffect(()=>{
        console.log(`(this is same as a cleanup function)This will run only when we trigger name state, The name changed: ${change}`)
    },[change])

    return (
        <div className='main'>
            <input value={change} onChange={onChnageHandler}/>
            <button onClick={onClickHandler}>+</button>
            <p>{value}</p>
        </div>
        )
}


export default Hooks
