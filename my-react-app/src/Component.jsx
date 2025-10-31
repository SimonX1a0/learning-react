import React, {useState} from "react"

function Component(){

    const [number, setNumber] = useState(0);
     
    const increment = ()=>{
        setNumber(number+1)
    }
    
    const decrement = ()=>{
        setNumber(number-1)
    }

    const reset = ()=>{
        setNumber(0)
    }
    return(
        <>
            <h1>{number}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Decrement</button>
        </>
        
    )
}

export default Component