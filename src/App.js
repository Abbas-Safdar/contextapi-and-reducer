import React,{useState} from 'react';
import ContextApi from './ContextApi'
import Parent from './Parent'
import './App.css';


function App() {
  let sum = useState(1)
  
  return (
    <ContextApi.Provider  value={sum}>

      <div>
        <Parent />

        
      </div>
    </ContextApi.Provider>
  );
}

export default App;
