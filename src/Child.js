import React,{useContext} from 'react'
import ContextApi from './ContextApi';

const Child=()=>{

    let a =useContext(ContextApi)
    return(
    <div>
    
        <h1> The value of counter: {a}</h1>
            <button onClick={()=>{a[1](++a[0])}}>

            Increment in contextAPI
            </button>

    
    </div>
)
}


export default Child;