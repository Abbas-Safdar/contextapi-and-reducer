import React,{useReducer} from 'react'
import Contextreducer from './Contextreducer';

const Child2=()=>{

    let [state, dispatch]=useReducer(Contextreducer,1);
    return(
    <div>
    
        <h1> The value of counter Reducer: {state}</h1>
            <button onClick={()=>dispatch('INCREMENT')}>

            Increment in reducer
            </button>

    
    </div>
)
}


export default Child2;