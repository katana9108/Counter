import { useState } from 'react';

function App() {


  const [counter,setCounter]=useState(0);

  const handleClickIncrement=(e)=>{
    e.preventDefault();
    setCounter(counter+1);
  }

  const handleClickDecrement=(e)=>{
    e.preventDefault();
    counter ===0? setCounter(0):setCounter(counter-1);
  }
  const handleClickZero=(e)=>{
    e.preventDefault();
    setCounter(0);
  }

  return (

    <div className="App">
      <div>{counter}</div>
      <button onClick={handleClickIncrement}>Increment</button>
      <button onClick={handleClickDecrement}>Decrement</button>
      <button onClick={handleClickZero}>Reset To Zero</button>

    </div>
    
  );
}

export default App;
