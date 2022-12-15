
import { useMemo, useState } from 'react';
import './App.css';

function App() {
  const [countOne,setCountOne] = useState(0);
  const [countTwo,setCountTwo] = useState(0);

  const incrementOne = ()=>{
    setCountOne(countOne + 1)
  }

  const incrementTwo = ()=>{
    setCountTwo(countTwo + 1)
  }

  const isEven =  useMemo(() => {
    console.warn(".....")
    let i =0;
    while(i<200000000) i++;
    return countOne%2 === 0
  },[countOne])
 

  return (
    <div className="App">
      <button onClick={incrementOne} >Count One - {countOne}</button>
      {isEven ? "Even" : "Odd"}
      <button onClick={incrementTwo} >Count Two - {countTwo}</button>
    </div>
  );
}

export default App;
